/* Language context — exposes the current language, a setter, and the resolved
 * dictionary `t`. Content itself lives in src/config/portfolio.config.ts. */
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { dictionary, type Dict, type Lang } from "../config/portfolio.config";

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const value = useMemo<I18nValue>(() => ({ lang, setLang, t: dictionary[lang] }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
