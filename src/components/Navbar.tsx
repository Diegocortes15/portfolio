import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.bgVideo}>
        <video
          className={styles.bgVideoContent}
          preload="auto"
          poster="/images/bg-image-2.jpg"
          autoPlay
          muted
          loop
        >
          <source src="/video/bg-video-2.mp4" type="video/mp4" />
        </video>
      </div>

      <a href="https://github.com/Diegocortes15/" target="_blank" rel="noreferrer" className={styles.brand}>
        <i className="fa-brands fa-github" /> Diegocortes15
      </a>

      <ul className={styles.navList}>
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a className={styles.navLink} href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <video className={styles.mobileVideoBg} autoPlay muted loop>
              <source src="/video/bg-video-2.mp4" type="video/mp4" />
            </video>
            <ul className={styles.mobileList}>
              {navLinks.map(({ label, href }, i) => (
                <li key={label}>
                  <a className={styles.mobileLink} href={href} onClick={closeMenu}>
                    0{i + 1} {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
