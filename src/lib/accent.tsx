/* Accent context — owns the accent palette and applies it to CSS custom
 * properties on :root. The in-page switcher is currently hidden, so the accent
 * is fixed to `defaultAccent` from the config (no persistence needed).
 * `setAccent` remains available for re-enabling the picker later. */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultAccent, palettes } from "../config/portfolio.config";

interface AccentValue {
  accent: string;
  setAccent: (key: string) => void;
}

const AccentContext = createContext<AccentValue | null>(null);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<string>(defaultAccent);

  useEffect(() => {
    const p = palettes.find((x) => x.key === accent) || palettes[0];
    const root = document.documentElement.style;
    root.setProperty("--pass-rgb", p.rgb);
    root.setProperty("--pass2-rgb", p.rgb2);
    root.setProperty("--pass", p.hex);
    root.setProperty("--pass-2", `rgb(${p.rgb2})`);
    root.setProperty("--pass-ink", p.ink);
  }, [accent]);

  return <AccentContext.Provider value={{ accent, setAccent }}>{children}</AccentContext.Provider>;
}

export function useAccent(): AccentValue {
  const ctx = useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within an AccentProvider");
  return ctx;
}
