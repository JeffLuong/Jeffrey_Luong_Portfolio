import { h } from 'preact';

import * as styles from './Footer.scss';
import ExternalLink from '../ExternalLink';
import { SourceCodeUrl } from '../../data';

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContent}>
      <small style={{ display: 'block', marginBottom: '.5rem' }}>
        <ExternalLink href={SourceCodeUrl}>View source {`</>`}</ExternalLink>
      </small>
      <small>© {new Date().getFullYear()} Jeffrey Luong</small>
    </div>
  </footer>
);

export default Footer;