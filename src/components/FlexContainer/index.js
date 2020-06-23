import { h } from 'preact';
import cx from 'classnames';

import * as styles from './FlexContainer.scss';

const FlexContainer = ({ className, children, justifyCenter = true, style }) => (
  <div
    className={cx(styles.FlexContainer, { [styles.justifyCenter]: justifyCenter }, className)}
    style={style}>
    {children}
  </div>
);

export default FlexContainer;