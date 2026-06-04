/* Experience — vertical, expandable timeline of roles plus an education chip. */
import { education, experience } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";
import TimelineNode from "./TimelineNode";

export default function Experience() {
  const { t } = useI18n();
  const e = t.experience;

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">{e.kicker}</span>
          <h2 className="section-title">{e.title}</h2>
          <p className="section-sub">{e.sub}</p>
        </div>
        <div className="tl">
          {experience.map((node, i) => (
            <TimelineNode key={node.key} node={node} delay={i * 0.05} />
          ))}
        </div>
        <div className="edu reveal">
          <Icon name="grad" />
          <span>{e.eduLabel}</span>
          <span className="y">{education.years}</span>
        </div>
      </div>
    </section>
  );
}
