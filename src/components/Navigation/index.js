import { h } from 'preact';
import { Link } from 'preact-router/match';
import cx from 'classnames';

import * as styles from './Navigation.scss';
import { UrlMap, UrlPaths } from '../../data';

const Navigation = ({ goDark }) => (
  <header className={cx(styles.NavHeader, { [styles.isDark]: goDark })}>
    <nav>
      <Link className={styles.HomeLink} href="/">Jeff</Link>
      <ul>
        {UrlPaths.filter(p => p !== '/').map(path => (
          <li>
            <Link activeClassName={styles.active} href={path}>
              {UrlMap[path].name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
