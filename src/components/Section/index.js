import { h } from 'preact';

import * as styles from './Section.scss';

const Section = ({ children }) => (
  <section className={styles.Section}>
    {children}
  </section>
);

export default Section;