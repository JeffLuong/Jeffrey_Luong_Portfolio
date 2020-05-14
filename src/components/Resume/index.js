import { h, Fragment } from 'preact';
import cx from 'classnames';

import { Education, Interests, Tech, WorkExperience } from '../../data';
import * as styles from './Resume.scss';

const ResumeSection = ({ children, title }) => (
  <section className={styles.ResumeSection}>
    <h2 className={styles.ResumeSectionHeader}>{title}</h2>
    {children}
  </section>
);

const Resume = () => (
  <Fragment>
    <ResumeSection title="Experience">
      {WorkExperience.map(([company, roles]) => (
        <div className={styles.ResumeEntry}>
          <h3 className={styles.ResumeSubHeader}>{company}</h3>
          <ul className={styles.ResumeEntryDetails}>
            {roles.length > 1 ? (
              <li>
                {roles.map(({ role, location, timeframe, description }) => (
                  <ul>
                    <li className={styles.Role}>{role}</li>
                    <li className={styles.RoleTimeframe}>{timeframe}</li>
                    <li>{location}</li>
                    {description &&
                      <li><p className={styles.RoleDescrip}>{description}</p></li>
                    }
                  </ul>
                ))}
              </li>
            ) : (
              <Fragment>
                <li className={styles.Role}>{roles[0].role}</li>
                <li className={styles.RoleTimeframe}>{roles[0].timeframe}</li>
                <li>{roles[0].location}</li>
                {roles[0].description &&
                  <li><p className={styles.RoleDescrip}>{roles[0].description}</p></li>
                }
              </Fragment>
            )}
          </ul>
        </div>
      ))}
    </ResumeSection>
    <ResumeSection title="Education">
      {Education.map(([institution, study]) => (
        <div className={styles.ResumeEntry}>
          <h3 className={styles.ResumeSubHeader}>{institution}</h3>
          <ul className={styles.ResumeEntryDetails}>
            {study.map(({ major, timeframe, description }) => (
              <Fragment>
                <li className={styles.Role}>{major}</li>
                <li className={styles.RoleTimeframe}>{timeframe}</li>
                <li><p className={styles.RoleDescrip}>{description}</p></li>
              </Fragment>
            ))}
          </ul>
        </div>
      ))}
    </ResumeSection>
    <ResumeSection title="Technical">
      <div className={cx(styles.ResumeEntry, styles.isFlex)}>
        {Tech.map(grouped => (
          <ul className={styles.ResumeEntryDetails}>
            {grouped.map(tech =>
              <li>{tech}</li>
            )}
          </ul>
        ))}
      </div>
    </ResumeSection>
    <ResumeSection title="Interests">
      <div className={cx(styles.ResumeEntry, styles.isFlex)}>
        {Interests.map(grouped => (
          <ul className={styles.ResumeEntryDetails}>
            {grouped.map(interest =>
              <li>{interest}</li>
            )}
          </ul>
        ))}
      </div>
    </ResumeSection>
  </Fragment>
);

export default Resume;