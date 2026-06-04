/* Footer — copyright, build note, and an "all tests passing" status line. */
import { useI18n } from "../../lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <span>{f.rights}</span>
        <span className="built">// {f.built}</span>
        <span className="all-pass">
          <span className="dot pass" />
          {f.allpass} ✓
        </span>
      </div>
    </footer>
  );
}
