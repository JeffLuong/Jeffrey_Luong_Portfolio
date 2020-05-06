import { h } from 'preact';
import cx from 'classnames';

import * as styles from './Tile.scss';

const Tile = ({ className, children, isClickable = true }) => (
  <div className={cx(styles.Tile, className, { [styles.isClickable]: isClickable })}>
    {children}
  </div>
);

export const TileTrigger = ({ children, ...rest }) => (
  <button className={styles.TileTrigger} type="button" {...rest}>
    {children}
  </button>
);

export default Tile;