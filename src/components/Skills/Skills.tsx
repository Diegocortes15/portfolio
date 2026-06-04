/* Skills — a 12-column matrix of grouped capabilities. The featured group
 * (Web UI Automation) spans full width and is visually highlighted. */
import { skills } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";

export default function Skills() {
  const { t, lang } = useI18n();
  const s = t.skills;

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">{s.kicker}</span>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-sub">{s.sub}</p>
        </div>
        <div className="skills-grid">
          {skills.map((g, gi) => (
            <div
              className={"skill-card reveal lume-host " + g.span + (g.featured ? " featured" : "")}
              key={g.key}
              style={{ transitionDelay: gi * 0.05 + "s" }}
            >
              <span className="lume" aria-hidden="true" />
              <div className="skill-head">
                <span className="t">
                  <span className="idx">{g.idx}</span>
                  {g.title[lang]}
                  {g.featured && g.blurb && <span className="t-blurb">{g.blurb[lang]}</span>}
                </span>
                {g.featured && <span className="badge-pass primary-badge">★ {s.primary}</span>}
                {g.note && <span className="skill-note">{g.note[lang]}</span>}
              </div>
              <div className="skill-items">
                {g.items.map((it) => (
                  <span className={"skill-item" + (g.featured ? " lg" : "")} key={it.l}>
                    {it.img ? (
                      <img className={"ic" + (it.tile ? " tile" : "")} src={it.img} alt="" />
                    ) : (
                      <span className="gl">{it.gl && <Icon name={it.gl} />}</span>
                    )}
                    {it.l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
