import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Cursor.module.css';

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a') || target.closest('button') || target.closest('label')) {
        setIsHovering(true);
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a') || target.closest('button') || target.closest('label')) {
        setIsHovering(false);
      }
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div className={styles.dotWrapper} style={{ x: mouseX, y: mouseY }}>
        <div className={styles.dot} />
      </motion.div>
      <motion.div className={styles.outlineWrapper} style={{ x: springX, y: springY }}>
        <motion.div
          className={styles.outline}
          animate={{ width: isHovering ? '5rem' : '2rem', height: isHovering ? '5rem' : '2rem' }}
          transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        />
      </motion.div>
    </>
  );
}
