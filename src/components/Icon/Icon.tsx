/* Icon — maps the design's glyph names to real lucide-react icons.
 *
 * Components and config reference icons by short string name (e.g. "arrow").
 * GitHub/LinkedIn brand marks are provided locally because lucide-react dropped
 * its brand icons. To add a new glyph: import the lucide icon (or add a local
 * SVG component) and register it in `registry`. */
import type { ComponentType } from "react";
import {
  ArrowRight,
  Check,
  MapPin,
  Mail,
  ExternalLink,
  Terminal,
  X,
  ChevronDown,
  Layers,
  Cpu,
  Sparkles,
  ClipboardCheck,
  FileText,
  GitBranch,
  GitGraph,
  Server,
  Database,
  GraduationCap,
  Globe,
  Code2,
  Menu,
  Zap,
  Box,
  FlaskConical,
  Play,
  Palette,
} from "lucide-react";

interface GlyphProps {
  className?: string;
  strokeWidth?: string | number;
  "aria-hidden"?: boolean;
}

// `any` here sidesteps prop-variance noise between lucide's forwardRef icons and
// our plain-function brand marks; both render an <svg> at runtime regardless.
type Glyph = ComponentType<any>;

/* Local brand marks (lucide removed these). */
const GithubMark = (props: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19.9 5 4.9 4.9 0 0 0 19.8 1S18.5.5 16 2.3a13.4 13.4 0 0 0-7 0C6.5.5 5.2 1 5.2 1A4.9 4.9 0 0 0 5 5a5.2 5.2 0 0 0-1.5 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-1 2.6V22" />
  </svg>
);

const LinkedinMark = (props: GlyphProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3" />
  </svg>
);

const registry: Record<string, Glyph> = {
  arrow: ArrowRight,
  check: Check,
  pin: MapPin,
  github: GithubMark,
  mail: Mail,
  linkedin: LinkedinMark,
  external: ExternalLink,
  terminal: Terminal,
  x: X,
  chevron: ChevronDown,
  layers: Layers,
  cpu: Cpu,
  sparkle: Sparkles,
  review: ClipboardCheck,
  file: FileText,
  branch: GitBranch,
  git: GitGraph,
  server: Server,
  db: Database,
  grad: GraduationCap,
  globe: Globe,
  code: Code2,
  menu: Menu,
  zap: Zap,
  box: Box,
  flask: FlaskConical,
  play: Play,
  palette: Palette,
};

export interface IconProps {
  name: string;
  className?: string;
}

/** Renders the icon registered under `name`. Sizing is handled by surrounding
 * CSS (rules target `svg`), matching the original design system. */
export default function Icon({ name, className }: IconProps) {
  const Glyph = registry[name];
  if (!Glyph) return null;
  return <Glyph className={className} strokeWidth={1.8} aria-hidden />;
}
