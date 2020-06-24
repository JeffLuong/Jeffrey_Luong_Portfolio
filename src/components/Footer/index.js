import { h } from 'preact';

import * as styles from './Footer.scss';
import ExternalLink from '../ExternalLink';
import { SourceCodeUrl } from '../../data';
import useAnalytics from '../../hooks/useAnalytics';

const Footer = () => {
  const { trackClick } = useAnalytics();
  const trackViewSrc = () => {
    trackClick({
      hitType: 'event',
      eventCategory: 'Source Code',
      eventAction: 'click',
      eventLabel: 'View Source Code'
    });
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContent}>
        <small style={{ display: 'block', marginBottom: '.5rem' }}>
          <ExternalLink
            onClick={trackViewSrc}
            href={SourceCodeUrl}>
            View source {`</>`}
          </ExternalLink>
        </small>
        <small>© {new Date().getFullYear()} Jeffrey Luong</small>
      </div>
    </footer>
  );
};

export default Footer;