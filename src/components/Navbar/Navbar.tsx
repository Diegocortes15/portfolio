/* Navbar — fixed top bar: brand, section anchors, theme picker, language
 * toggle and a primary Contact CTA. Gains a frosted background once scrolled. */
import { useEffect, useState } from "react";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const { t } = useI18n();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [string, string, string][] = [
    ["work", t.nav.work, "01"],
    ["skills", t.nav.skills, "02"],
    ["experience", t.nav.experience, "04"],
    ["contact", t.nav.contact, "05"],
  ];

  return (
    <nav className={"nav" + (stuck ? " stuck" : "")}>
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          <span className="brand-mark">✓</span>
          <span>
            <b>diego.cortes</b>
            <span className="sep"> · </span>
            <span className="role">qa.sdet</span>
          </span>
        </a>
        <div className="nav-links">
          {links.map(([id, label, num]) => (
            <a key={id} href={"#" + id} className="nav-link">
              <span className="nav-num">{num}</span>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          {/* Accent theme picker hidden by request — site is locked to one accent
              (see defaultAccent in portfolio.config.ts). Re-add <ThemePicker /> here to restore it. */}
          <LangToggle />
          <a href="#contact" className="btn btn-primary" style={{ padding: "10px 16px" }}>
            {t.navLabel}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </nav>
  );
}
