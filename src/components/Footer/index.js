import { h } from 'preact';

import * as styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContent}>
      <span>© <span class="app-year">{new Date().getFullYear()}</span> Jeffrey Luong</span>
    </div>
  </footer>
);

export default Footer;