/* useOverlay — shared open/close lifecycle for scrim-based overlays (drawer,
 * modal). Handles deferred mount/unmount for enter+exit transitions, body
 * scroll lock, and Escape-to-close. */
import { useEffect, useRef, useState } from "react";

export interface OverlayState {
  /** Whether the overlay is in the DOM (stays true during the exit animation). */
  mounted: boolean;
  /** Whether the "show" class should be applied (drives the CSS transition). */
  show: boolean;
}

export function useOverlay(open: boolean, exitMs: number, onClose: () => void): OverlayState {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
      document.body.style.overflow = "hidden";
      return () => cancelAnimationFrame(raf);
    }
    if (mounted) {
      setShow(false);
      document.body.style.overflow = "";
      const tm = window.setTimeout(() => setMounted(false), exitMs);
      return () => clearTimeout(tm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { mounted, show };
}
