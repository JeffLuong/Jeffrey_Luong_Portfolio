import { h } from 'preact';
import { Link } from 'preact-router/match';
import cx from 'classnames';

import * as styles from './Navigation.scss';
import { UrlMap } from '../../utils/constants';

const Navigation = ({ goDark }) => (
  <header className={cx(styles.NavHeader, { [styles.isDark]: goDark })}>
    <nav>
      <Link className={styles.HomeLink} href="/">Jeff</Link>
      <ul>
        {Object.keys(UrlMap).filter(p => p !== '/').map(path => (
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
