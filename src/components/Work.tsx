import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Work.module.css';

export default function Work() {
  const automation = projects.filter((p) => p.category === 'automation');
  const web = projects.filter((p) => p.category === 'web');

  return (
    <section className={styles.work} id="work">
      <div className="container">
        <div className="timeline timeline--alt" />
        <div className="section__header">
          <div className="section__title bullet__title">
            <small>Work</small>
          </div>
          <h2 className="section__title__description">
            Selected Web &amp; Automation Frameworks...
          </h2>
        </div>
      </div>

      <div className={`${styles.projects} ${styles.automationMark}`}>
        {automation.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className={`${styles.projects} ${styles.webMark}`}>
        {web.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <a href="#about" className="down-arrow" tabIndex={0} />
    </section>
  );
}
