/* Cursor — custom pointer: a solid dot that tracks the mouse exactly plus a
 * ring that trails with spring-like lag and grows when hovering interactive
 * elements. Uses mix-blend-mode: difference so it reads on any background.
 *
 * Self-disables (renders nothing, native cursor stays) on touch/coarse pointers
 * and when the user prefers reduced motion. No animation library needed. */
import { useEffect, useRef, useState } from "react";

const HOVER_TARGETS = "a, button, label";
const RING_LERP = 0.2;

/** Only enable the custom cursor on devices with a fine pointer + hover (i.e.
 * not touch) and when reduced motion isn't requested. */
function cursorEnabled(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Cursor() {
  const [enabled] = useState(cursorEnabled);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    // Start off-screen until the first move.
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      place(dot, mouseX, mouseY);
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVER_TARGETS)) ring.classList.add("hover");
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(HOVER_TARGETS)) ring.classList.remove("hover");
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    let raf = 0;
    const tick = () => {
      ringX += (mouseX - ringX) * RING_LERP;
      ringY += (mouseY - ringY) * RING_LERP;
      place(ring, ringX, ringY);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
