import { h } from 'preact';
import { Link } from 'preact-router/match';

import * as styles from './Navigation.scss';

const Navigation = () => (
  <header className={styles.NavHeader}>
    <nav>
      <Link activeClassName={styles.active} href="/about">About</Link>
      <Link activeClassName={styles.active} href="/work">Work</Link>
    </nav>
  </header>
);

export default Navigation;
