/* FrameworksModal — centered dialog listing all open-source repos as cards. */
import { frameworks } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import { useOverlay } from "../../lib/use-overlay";
import Icon from "../Icon";

export interface FrameworksModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FrameworksModal({ open, onClose }: FrameworksModalProps) {
  const { t, lang } = useI18n();
  const { mounted, show } = useOverlay(open, 360, onClose);
  if (!mounted) return null;
  const p = t.projects;

  return (
    <div className={"fw-scrim" + (show ? " show" : "")} onClick={onClose}>
      <div className="fw-modal" onClick={(e) => e.stopPropagation()}>
        <div className="fw-head">
          <div>
            <span className="kicker">// more_repos</span>
            <h3 className="fw-title">{p.moreTitle}</h3>
            <p className="fw-sub">{p.moreSub}</p>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            <Icon name="x" />
          </button>
        </div>
        <div className="fw-grid">
          {frameworks.map((f) => (
            <a
              key={f.key}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fw-card lume-host"
            >
              <span className="lume" aria-hidden="true" />
              <div className="fw-card-top">
                <span className="fw-logo">
                  {f.img ? (
                    <img src={f.img} alt="" />
                  ) : (
                    <span className="fw-gl">{f.gl && <Icon name={f.gl} />}</span>
                  )}
                </span>
                <span className="fw-cat">{f.cat[lang]}</span>
                <span className="fw-stars">
                  <Icon name="sparkle" />
                  {f.stars}
                </span>
              </div>
              <h4 className="fw-name">{f.name}</h4>
              <p className="fw-desc">{f.desc[lang]}</p>
              <div className="fw-foot">
                <span className="fw-lang">
                  <i style={{ background: f.langColor }} />
                  {f.lang}
                </span>
                <span className="fw-view">
                  {p.viewOn}
                  <Icon name="external" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
