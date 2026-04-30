import styles from './Contact.module.css';

const socials = [
  {
    label: 'in/diegocortesroa/',
    href: 'https://www.linkedin.com/in/diegocortesroa/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'Diegocortes15',
    href: 'https://github.com/Diegocortes15',
    icon: 'fa-brands fa-github',
  },
];

export default function Contact() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="footer__content container">
        <div className="timeline" />
        <div className="section__header">
          <div className="section__title bullet__title">
            <small>Contact</small>
          </div>
        </div>
        <div className={`section__content ${styles.socialContent}`}>
          <h2 className={styles.socialTitle}>Find me on:</h2>
          <ul className={styles.contactList}>
            {socials.map(({ label, href, icon }) => (
              <li key={label} className={styles.contactItem}>
                <a className={styles.contactLink} href={href} target="_blank" rel="noreferrer">
                  <i className={`${icon} ${styles.contactIcon}`} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.copy}>
          <small>© Made by Diego Cortés. Circa 2026.</small>
        </div>
      </div>
    </footer>
  );
}
