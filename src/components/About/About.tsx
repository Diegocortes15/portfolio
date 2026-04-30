import { about } from '../../data/about';
import styles from './About.module.css';

export default function About() {
  let n = 0;
  const ln = () => String(++n);

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className="timeline" />
        <div className="section__header">
          <div className="section__title bullet__title">
            <small>About</small>
          </div>
        </div>
        <div className="section__content">
          <div className={styles.codeWrap}>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeMethods}>class</span>{' '}
              <span className={styles.codeClassName}>
                DiegoCortes{' '}
                <span className={styles.codeBracket1}>{'{'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMethods}>
                constructor<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeScope}>this</span>.
              <span className={styles.codeProp}>name</span>
              <span className={styles.codeMath}> = </span>
              <span className={styles.codeString}>'{about.name}'</span>;
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeScope}>this</span>.
              <span className={styles.codeProp}>dayOfBirthstamp</span>
              <span className={styles.codeMath}> = </span>
              <span className={styles.codeString}>{about.dob}</span>;
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeScope}>this</span>.
              <span className={styles.codeProp}>email</span>
              <span className={styles.codeMath}> = </span>
              <span className={styles.codeString}>'{about.email}'</span>;
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMthd}>
                workExperience<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeMethods}>return</span>{' '}
              <span className={styles.codeBracket3}>{'['}</span>
            </div>

            {about.experience.map((exp) => (
              <div key={exp.period} data-line-nr={ln()} className={styles.codeLine}>
                <span className={styles.codeDot}>{'······'}</span>
                <span className={styles.codeBracket1}>{'{'}</span>
                <span className={styles.codeString}>'{exp.period}'</span>
                {' : '}
                <span className={styles.codeString}>'{exp.role}'</span>
                <span className={styles.codeBracket1}>{' }'}</span>
              </div>
            ))}

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeBracket3}>{']'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMthd}>
                education<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeMethods}>return</span>{' '}
              <span className={styles.codeBracket3}>{'['}</span>
            </div>

            {about.education.map((edu) => (
              <div key={edu.title} data-line-nr={ln()} className={styles.codeLine}>
                <span className={styles.codeDot}>{'······'}</span>
                <span className={styles.codeBracket1}>{'{ '}</span>
                <span className={styles.codeString}>'{edu.year}'</span>
                {' : '}
                <span className={styles.codeString}>'{edu.title}'</span>
                <span className={styles.codeBracket1}>{' },'}</span>
              </div>
            ))}

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeBracket3}>{']'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMthd}>
                skills<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeMethods}>return</span>{' '}
              <span className={styles.codeBracket3}>{'['}</span>
              <span className={styles.codeString}>
                {about.skills.map((s) => `'${s}'`).join(', ')}
              </span>
              <span className={styles.codeBracket3}>
                {' '}
                <span className={styles.cursor} />
                {']'}
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeBracket1}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

          </div>
        </div>
      </div>
      <a href="#contact" className="down-arrow" tabIndex={0} />
    </section>
  );
}
