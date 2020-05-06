import { h } from 'preact';

import * as styles from './ExternalLink.scss';

const ExternalLink = ({ children, href, ...rest }) => (
  <a
    href={href}
    className={styles.ExternalLink}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}>
    {children}
  </a>
);

export default ExternalLink;