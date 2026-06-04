/* useInteractions — wires the page-wide micro-interactions once the preloader
 * is gone: scroll-reveal, a pointer-tracking spotlight on `.lume-host` cards,
 * and magnetic `.mag` buttons. Respects prefers-reduced-motion. */
import { useEffect } from "react";

export function useInteractions(active: boolean) {
  // Scroll-reveal: fade/slide elements in as they enter the viewport.
  useEffect(() => {
    if (!active) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  // Cursor spotlight: track the pointer position inside `.lume-host` cards.
  useEffect(() => {
    if (!active) return;
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const host = target?.closest?.(".lume-host") as HTMLElement | null;
      if (!host) return;
      const r = host.getBoundingClientRect();
      host.style.setProperty("--mx", e.clientX - r.left + "px");
      host.style.setProperty("--my", e.clientY - r.top + "px");
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, [active]);

  // Magnetic buttons: nudge `.mag` elements toward the cursor.
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".mag").forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
      };
      const leave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [active]);
}
