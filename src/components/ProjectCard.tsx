import { useMotionValue, useTransform, motion } from 'framer-motion';
import type { Project } from '../data/projects';
import styles from './ProjectCard.module.css';

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const widthClass = project.width === '33' ? styles.project33 : styles.project50;
  const typeClass = project.type === 'web' ? styles.web : styles.mobile;

  return (
    <div className={`${styles.project} ${widthClass}`}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`${styles.projectBox} ${typeClass}`}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1120,
          marginTop: project.offsetTop ? `${project.offsetTop}rem` : undefined,
          marginLeft: project.offsetLeft ? `${project.offsetLeft}rem` : undefined,
          marginRight: project.offsetRight ? `${project.offsetRight}rem` : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, x: -100, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.meta}>
          <h3>
            {project.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h3>
          <div className="divider" />
          <div className={styles.nav}>
            <div>{String(index).padStart(2, '0')}</div>
            <div className={styles.navArrow}>→</div>
          </div>
        </div>

        {project.frameworkIcon && (
          <img
            className={styles.frameworkIcon}
            src={project.frameworkIcon}
            alt={project.title}
            loading="lazy"
          />
        )}

        <img
          className={styles.sut}
          src={project.screenshot}
          alt={project.title}
          loading="lazy"
        />
      </motion.a>
    </div>
  );
}
