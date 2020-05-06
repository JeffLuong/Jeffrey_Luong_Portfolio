import { h } from 'preact';
import cx from 'classnames';

import * as styles from './Section.scss';

const Section = ({ children, className }) => (
  <section className={cx(styles.Section, className)}>
    {children}
  </section>
);

export default Section;