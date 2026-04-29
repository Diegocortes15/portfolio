import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hide = () => setIsVisible(false);
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.preloader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.preloaderInner}>
            <div className={styles.box} />
            <div className={styles.box} />
            <div className={styles.box} />
            <div className={styles.box} />
            <div className={styles.box} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
