/* Contact — direct links only (email, LinkedIn, GitHub). No form/backend. */
import { links } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";

interface ContactLink {
  ic: string;
  label: string;
  href: string;
  external: boolean;
}

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  const items: ContactLink[] = [
    { ic: "mail", label: links.email, href: "mailto:" + links.email, external: false },
    { ic: "linkedin", label: "linkedin.com/in/diegocortesroa", href: links.linkedin, external: true },
    { ic: "github", label: "github.com/Diegocortes15", href: links.github, external: true },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-card reveal lume-host">
          <span className="lume" aria-hidden="true" />
          <span className="kicker" style={{ justifyContent: "center", display: "flex" }}>
            {c.kicker}
          </span>
          <h2>{c.title}</h2>
          <p>{c.sub}</p>
          <div className="contact-links">
            {items.map((l) => (
              <a
                key={l.ic}
                className="clink lume-host"
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
              >
                <span className="lume" aria-hidden="true" />
                <Icon name={l.ic} />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
