/* Hero — name, role, about summary, CTAs, a stat strip, and a decorative
 * terminal card. Reveal delays stagger the entrance on load. */
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-status reveal">
            <span className="badge-pass">{h.deploy}</span>
            <span className="hs-state">
              <span className="dot pass" />
              {h.status}
            </span>
            <span className="hs-ref">· main@a1f3c9</span>
          </div>
          <h1 className="reveal" style={{ transitionDelay: ".05s" }}>
            {h.h1a}
            <br />
            <span className="accent">{h.h1b}</span>
            <span className="cursor-blink" />
          </h1>
          <div className="hero-role reveal" style={{ transitionDelay: ".12s" }}>
            {h.role1}
            <span className="pipe">/</span>
            {h.role2}
            <div style={{ color: "var(--ink-mute)", marginTop: 4, fontSize: 13 }}>{h.roleSub}</div>
          </div>
          <div className="hero-specialty reveal" style={{ transitionDelay: ".15s" }}>
            <span className="badge-pass">★ {h.specialty}</span>
          </div>
          <p className="hero-about reveal" style={{ transitionDelay: ".18s" }}>
            {h.about}
          </p>
          <div className="hero-loc reveal" style={{ transitionDelay: ".22s" }}>
            <Icon name="pin" />
            {h.loc}
          </div>
          <div className="hero-cta reveal" style={{ transitionDelay: ".26s" }}>
            <a href="#work" className="btn btn-primary mag">
              {h.ctaWork}
              <Icon name="arrow" />
            </a>
            <a href="#contact" className="btn btn-ghost mag">
              {h.ctaContact}
              <Icon name="terminal" />
            </a>
          </div>
          <div className="statstrip reveal" style={{ transitionDelay: ".3s" }}>
            {h.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="n">
                  {s.n}
                  <span className="u"> {s.u}</span>
                </div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: ".18s" }}>
          <div className="term">
            <div className="term-bar">
              <span className="tl">
                <i style={{ background: "#f87171" }} />
                <i style={{ background: "#fbbf24" }} />
                <i style={{ background: "#34d399" }} />
              </span>
              <span className="tt">{h.termTitle}</span>
            </div>
            <div className="term-body">
              <div className="ln">
                <span className="pr">$</span>
                <span>whoami</span>
              </div>
              <div className="ln">
                <span className="cm">→ Diego Cortes · QA Automation Engineer</span>
              </div>
              <div className="ln" style={{ marginTop: 8 }}>
                <span className="pr">$</span>
                <span>cat profile.json</span>
              </div>
              <div className="ln ind">
                <span className="cm">{"{"}</span>
              </div>
              <div className="ln ind">
                &nbsp;&nbsp;"focus": <span className="va">"UI + API automation"</span>,
              </div>
              <div className="ln ind">
                &nbsp;&nbsp;"workflow": <span className="va">"AI-driven"</span>,
              </div>
              <div className="ln ind">
                &nbsp;&nbsp;"based": <span className="va">"Bogotá, CO"</span>,
              </div>
              <div className="ln ind">
                &nbsp;&nbsp;"status": <span className="st">"open to roles"</span>
              </div>
              <div className="ln ind">
                <span className="cm">{"}"}</span>
              </div>
              <div className="ln" style={{ marginTop: 8 }}>
                <span className="pr">$</span>
                <span>npm run suite</span>
              </div>
              <div className="ln">
                <span className="ok">✓ 28 passed</span> <span className="cm">in 0.42s</span>
                <span className="cursor-blink" style={{ height: ".9em" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
