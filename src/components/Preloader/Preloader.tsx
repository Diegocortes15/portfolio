/* Preloader — an "npm test" boot sequence that streams spec results, fills a
 * progress bar, then wipes away to reveal the page. */
import { useEffect, useRef, useState } from "react";
import { boot } from "../../config/portfolio.config";
import { useI18n } from "../../lib/i18n";

const totalTests = boot.reduce((sum, b) => sum + b.n, 0);

export interface PreloaderProps {
  onDone: () => void;
}

export default function Preloader({ onDone }: PreloaderProps) {
  const { t } = useI18n();
  const b = t.boot;
  const [lines, setLines] = useState(0);
  const [pct, setPct] = useState(0);
  const [wipe, setWipe] = useState(false);
  const doneRef = useRef(false);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    setWipe(true);
    setTimeout(onDone, 520);
  }

  useEffect(() => {
    const timers: number[] = [];
    boot.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLines(i + 1), 180 + i * 215));
    });

    const start = performance.now();
    const DURATION = 1850;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / DURATION) * 100);
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else window.setTimeout(finish, 360);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allShown = lines >= boot.length;

  return (
    <div className={"preloader" + (wipe ? " wipe" : "")}>
      <div className="boot">
        <div className="boot-bar-top">
          <span className="tl">
            <i style={{ background: "#f87171" }} />
            <i style={{ background: "#fbbf24" }} />
            <i style={{ background: "#34d399" }} />
          </span>
          <span>test-runner</span>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <span className="dot run" />
            {b.running}
          </span>
        </div>

        <div className="boot-prompt" style={{ marginBottom: 14 }}>
          <span style={{ color: "var(--ink-mute)" }}>$</span> {b.cmd}
        </div>

        <div className="boot-lines">
          {boot.slice(0, lines).map((line) => (
            <div className="boot-line" key={line.file} style={{ animation: "fadeUp .3s ease both" }}>
              <span className="ok">✓</span>
              <span className="file">{line.file}</span>
              <span className="count">({line.n})</span>
              <span className="ms">{line.ms} ms</span>
            </div>
          ))}
        </div>

        {allShown && (
          <div className="boot-summary" style={{ animation: "fadeUp .35s ease both" }}>
            <div className="row">
              <span className="lbl">{b.suites}</span>
              <b>
                {boot.length} {b.passed}
              </b>
              <span style={{ color: "var(--ink-faint)" }}>/ {boot.length} total</span>
            </div>
            <div className="row">
              <span className="lbl">{b.tests}</span>
              <b>
                {totalTests} {b.passed}
              </b>
              <span style={{ color: "var(--ink-faint)" }}>/ {totalTests} total</span>
            </div>
            <div className="row">
              <span className="lbl">{b.time}</span>
              <span style={{ color: "var(--ink-soft)" }}>0.42 s</span>
            </div>
          </div>
        )}

        <div className="boot-progress">
          <i style={{ width: pct + "%" }} />
        </div>
        <div className="boot-pct">
          <span>{pct >= 100 ? b.ready : b.compiling}</span>
          <span>{Math.round(pct)}%</span>
        </div>

        <button className="boot-skip" onClick={finish}>
          {b.skip}
        </button>
      </div>
    </div>
  );
}
