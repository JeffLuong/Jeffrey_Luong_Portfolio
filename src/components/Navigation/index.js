import { h } from 'preact';
import { Link } from 'preact-router/match';
import cx from 'classnames';

import * as styles from './Navigation.scss';
import { UrlMap } from '../../utils/constants';

const Navigation = ({ goDark }) => (
  <header className={cx(styles.NavHeader, { [styles.isDark]: goDark })}>
    <nav>
      {Object.keys(UrlMap).filter(p => p !== '/').map(path => (
        <Link activeClassName={styles.active} href={path}>
          {UrlMap[path].name}
        </Link>
      ))}
    </nav>
  </header>
);

export default Navigation;
