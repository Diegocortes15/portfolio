/* ProjectDrawer — slide-in panel detailing a project's architecture flow.
 * Retains the last project during the close animation so content doesn't blank. */
import { useRef } from "react";
import type { Project } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import { useOverlay } from "../../lib/use-overlay";
import Icon from "../Icon";

export interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const { t, lang } = useI18n();
  const { mounted, show } = useOverlay(!!project, 440, onClose);
  const lastRef = useRef<Project | null>(null);
  if (project) lastRef.current = project;

  const data = project ?? lastRef.current;
  if (!mounted || !data) return null;
  const p = t.projects;

  return (
    <div className={"modal-scrim" + (show ? " show" : "")} onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-bar">
          <span className="p">
            <span className="dot pass" />
            {data.path}
          </span>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            <Icon name="x" />
          </button>
        </div>
        <div className="drawer-body">
          <div className="drawer-tool">
            <span className="proj-tool-logo lg">
              <img src={data.logo} alt={data.logoName} />
            </span>
            <span>
              <span className="drawer-tool-name">{data.logoName}</span>
              <span className="drawer-tool-meta">{data.meta[lang]}</span>
            </span>
            {data.flagship && (
              <span className="badge-pass" style={{ marginLeft: "auto" }}>
                ★ {p.flagship}
              </span>
            )}
          </div>
          <h2 className="drawer-title">{data.title[lang]}</h2>
          <p className="drawer-one">{data.one[lang]}</p>

          <div className="drawer-tags">
            {data.tools.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="arch-label">{p.archTitle}</div>
          <div className="arch-flow">
            {data.arch.map((n) => (
              <div className="arch-node" key={n.step}>
                <span className="ni">
                  <Icon name={n.ic} />
                </span>
                <div>
                  <h4>{n.h[lang]}</h4>
                  <p>{n.p[lang]}</p>
                </div>
                <span className="step">{n.step}</span>
              </div>
            ))}
          </div>

          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 30 }}
          >
            {p.viewRepo}
            <Icon name="github" />
          </a>
        </div>
      </div>
    </div>
  );
}
