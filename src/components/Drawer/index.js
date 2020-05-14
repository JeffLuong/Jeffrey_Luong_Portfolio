import { h } from 'preact';
import cx from 'classnames';
import { useEffect, useState } from 'preact/hooks';

import * as Colors from '../../styles/colors.scss';
import * as styles from './Drawer.scss';

const Drawer = ({ className, children, onClose }) => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const onCloseDrawer = () => {
    setShouldOpen(false);
    setTimeout(() => onClose(), 510);
  };

  useEffect(() => {
    setShouldOpen(true);
  }, []);

  return (
    <div className={styles.DrawerContainer}>
      <div className={cx(styles.DrawerBg, { [styles.displayBg]: shouldOpen })} onClick={onCloseDrawer} />
      <aside className={cx(styles.Drawer, className, { [styles.animateOpen]: shouldOpen })}>
        {children}
        <button className={styles.DrawerClose} onClick={onCloseDrawer} type="button" ariaLabel="Close">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill={Colors.primaryTheme} />
          </svg>
        </button>
      </aside>
    </div>
  )
};

export default Drawer;