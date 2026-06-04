/* ProjectCard — a single featured-project card that opens the detail drawer. */
import type { Project } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";

export interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const { t, lang } = useI18n();
  const p = t.projects;

  return (
    <button
      type="button"
      className={"proj-card reveal lume-host" + (project.flagship ? " flagship" : "")}
      style={{ transitionDelay: index * 0.06 + "s" }}
      onClick={() => onOpen(project)}
    >
      <span className="lume" aria-hidden="true" />
      {project.flagship && <span className="proj-flag">★ {p.flagship}</span>}
      <div className="proj-toprow">
        <span className="proj-tool">
          <span className="proj-tool-logo">
            <img src={project.logo} alt={project.logoName} />
          </span>
          <span className="proj-tool-name">{project.logoName}</span>
        </span>
        <span className="proj-meta">
          <span className="dot pass" />
          <span>{project.meta[lang]}</span>
        </span>
      </div>
      <h3 className="proj-title">{project.title[lang]}</h3>
      <p className="proj-one">{project.one[lang]}</p>
      <div className="proj-tags">
        {project.tools.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="proj-foot">
        <span className="proj-open">
          {p.open}
          <Icon name="arrow" />
        </span>
        <span className="proj-path">{project.path}</span>
      </div>
    </button>
  );
}
