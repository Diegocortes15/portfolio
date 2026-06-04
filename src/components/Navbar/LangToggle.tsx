/* LangToggle — EN/ES sliding switch wired to the i18n context. */
import { useI18n } from "../../lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className={"lang " + lang}>
      <span className="slider" />
      <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-label="English">
        EN
      </button>
      <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")} aria-label="Español">
        ES
      </button>
    </div>
  );
}
