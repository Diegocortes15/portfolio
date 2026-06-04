/* Work — featured projects grid plus a "browse all frameworks" entry point.
 * Owns the active-project (drawer) and show-all (modal) UI state. */
import { useState } from "react";
import { projects, type Project } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";
import ProjectCard from "./ProjectCard";
import ProjectDrawer from "./ProjectDrawer";
import FrameworksModal from "./FrameworksModal";

export default function Work() {
  const { t } = useI18n();
  const p = t.projects;
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">{p.kicker}</span>
          <h2 className="section-title">{p.title}</h2>
          <p className="section-sub">{p.sub}</p>
        </div>
        <div className="proj-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.key} project={project} index={i} onOpen={setActive} />
          ))}
        </div>
        <button className="more-frameworks reveal mag lume-host" onClick={() => setShowAll(true)}>
          <span className="lume" aria-hidden="true" />
          <span className="mf-left">
            <span className="mf-ic">
              <Icon name="git" />
            </span>
            <span>
              <span className="mf-t">{p.browseAll}</span>
              <span className="mf-s">{p.moreCount} · github.com/Diegocortes15</span>
            </span>
          </span>
          <span className="mf-arrow">
            <Icon name="arrow" />
          </span>
        </button>
      </div>
      <ProjectDrawer project={active} onClose={() => setActive(null)} />
      <FrameworksModal open={showAll} onClose={() => setShowAll(false)} />
    </section>
  );
}
