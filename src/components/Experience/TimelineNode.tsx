/* TimelineNode — one expandable experience entry with an animated height. */
import { useEffect, useRef, useState } from "react";
import type { ExperienceNode } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";
import Icon from "../Icon";

export interface TimelineNodeProps {
  node: ExperienceNode;
  delay: number;
}

export default function TimelineNode({ node, delay }: TimelineNodeProps) {
  const { lang } = useI18n();
  const [open, setOpen] = useState(node.open);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(node.open ? "auto" : 0);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      setHeight(bodyRef.current.scrollHeight);
      const tm = window.setTimeout(() => setHeight("auto"), 400);
      return () => clearTimeout(tm);
    }
    setHeight(bodyRef.current.scrollHeight);
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setHeight(0)));
    return () => cancelAnimationFrame(raf);
  }, [open]);

  const accs = node.accs[lang];

  return (
    <div className="tl-node reveal" style={{ transitionDelay: delay + "s" }}>
      <span className="tl-dot">
        <i />
      </span>
      <div className={"tl-card" + (open ? " open" : "")}>
        <button className="tl-head" onClick={() => setOpen(!open)} aria-expanded={open}>
          <span className="tl-co">
            <div className="tl-role">{node.role[lang]}</div>
            <div className="tl-org">
              {node.org} <span className="tag">· {node.ctx[lang]}</span>
            </div>
          </span>
          <span className="tl-when">
            {node.from} — {node.to[lang]}
          </span>
          <span className="tl-caret">
            <Icon name="chevron" />
          </span>
        </button>
        <div className="tl-body" style={{ height }}>
          <div className="tl-body-in" ref={bodyRef}>
            <div className="tl-accs">
              {accs.map((a, i) => (
                <div className="tl-acc" key={i}>
                  <span className="ok">✓</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
