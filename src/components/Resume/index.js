import { h, Fragment } from 'preact';
import cx from 'classnames';

import { Education, Interests, Tech, WorkExperience } from '../../data';
import { getWorkTimeframe, getRoleLength } from '../../utils';
import * as styles from './Resume.scss';

const ResumeSection = ({ children, title }) => (
  <section className={styles.ResumeSection}>
    <h2 className={styles.ResumeSectionHeader}>{title}</h2>
    {children}
  </section>
);

const ResumeEntry = ({ className, children, subtitle, footnote }) => (
  <article className={cx(styles.ResumeEntry, className)}>
    {subtitle && (
      <h3 className={cx(styles.ResumeSubHeader, footnote ? styles.smallMargin : {})}>
        {subtitle}
      </h3>
    )}
    {footnote && <h5>{footnote}</h5>}
    {children}
  </article>
);

const ResumeMiscDetailsList = ({ details }) => details.map(grouped => (
  <ul className={styles.ResumeEntryDetails}>
    {grouped.map(tech => <li>{tech}</li>)}
  </ul>
));

const Role = ({ role, location, timeframe, description, current }) => (
  <Fragment>
    <li className={styles.Role}>{role}</li>
    <li className={styles.RoleTimeframe}>{getWorkTimeframe(timeframe[0], timeframe[1], current)}</li>
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
        <ResumeEntry
          subtitle={company}
          footnote={
            roles.length > 1
              ? getRoleLength(
                roles[1].timeframe[0],
                roles[0].timeframe[1]
              )
              : undefined
          }
        >
          <ul className={styles.ResumeEntryDetails}>
            {roles.length > 1 ? (
              <li>
                {roles.map(role => (
                  <ul>
                    <Role {...role} />
                  </ul>
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