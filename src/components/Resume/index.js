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

const ResumeEntry = ({ className, children, subtitle }) => (
  <article className={cx(styles.ResumeEntry, className)}>
    {subtitle && <h3 className={styles.ResumeSubHeader}>{subtitle}</h3>}
    {children}
  </article>
);

const ResumeMiscDetailsList = ({ details }) => details.map(grouped => (
  <ul className={styles.ResumeEntryDetails}>
    {grouped.map(tech => <li>{tech}</li>)}
  </ul>
));

const Role = ({ role, location, timeframe, description }) => (
  <Fragment>
    <li className={styles.Role}>{role}</li>
    <li className={styles.RoleTimeframe}>{timeframe}</li>
    <li>{location}</li>
    {description &&
      <li><p className={styles.RoleDescrip}>{description}</p></li>
    }
  </Fragment>
);

const Resume = () => (
  <Fragment>
    <ResumeSection title="Experience">
      {WorkExperience.map(([company, roles]) => (
        <ResumeEntry subtitle={company}>
          <ul className={styles.ResumeEntryDetails}>
            {roles.length > 1 ? (
              <li>
                {roles.map(role => (
                  <ul><Role {...role} /></ul>
                ))}
              </li>
            ) : (
              <Role {...roles[0]} />
            )}
          </ul>
        </ResumeEntry>
      ))}
    </ResumeSection>
    <ResumeSection title="Education">
      {Education.map(([institution, study]) => (
        <ResumeEntry subtitle={institution}>
          <ul className={styles.ResumeEntryDetails}>
            {study.map(({ major, timeframe, description }) => (
              <Fragment>
                <li className={styles.Role}>{major}</li>
                <li className={styles.RoleTimeframe}>{timeframe}</li>
                <li><p className={styles.RoleDescrip}>{description}</p></li>
              </Fragment>
            ))}
          </ul>
        </ResumeEntry>
      ))}
    </ResumeSection>
    <ResumeSection title="Technical">
      <ResumeEntry className={styles.isFlex}>
        <ResumeMiscDetailsList details={Tech} />
      </ResumeEntry>
    </ResumeSection>
    <ResumeSection title="Interests">
      <ResumeEntry className={styles.isFlex}>
        <ResumeMiscDetailsList details={Interests} />
      </ResumeEntry>
    </ResumeSection>
  </Fragment>
);

export default Resume;