import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.css';

const roles = ['QA Automation Engineer', 'Multimedia Engineer', 'QA Engineer'];

export default function Header() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header} id="start">
      <section className={styles.hero}>
        <div className={styles.bgVideoWrap}>
          <video
            className={styles.bgVideo}
            preload="auto"
            autoPlay
            muted
            loop
          >
            <source src="/video/bg-video-2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={`${styles.content} container`}>
          <div className="timeline timeline--alt">
            <div className="bullet" />
          </div>
          <div className="section__title">
            <small>Start</small>
          </div>

          <h1 className={`margin-bottom-15 ${styles.title}`}>
            Hi, my name is <span className="primary-color">Diego Cortés</span>
          </h1>

          <h1 className={`margin-bottom-15 ${styles.title}`}>
            <span className={styles.rolContainer}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className={styles.rolWord}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className={`${styles.titleDescription}`}>Let me show you...</p>
        </div>

        <a href="#work" className="down-arrow" tabIndex={0} />
      </section>
    </header>
  );
}
