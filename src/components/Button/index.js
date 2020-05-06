import { h } from 'preact';

import * as styles from './Button.scss';

const Button = ({ children, onClick, ...rest }) => (
  <button
    onClick={onClick}
    className={styles.Button}
    type="button"
    {...rest}>
    {children}
  </button>
);

export const ButtonLink = ({ children, href, isExternal, ...rest }) => (
  <a
    href={href}
    className={styles.Button}
    target={isExternal ? '_blank' : ''}
    rel="noopener noreferrer"
    {...rest}>
    {children}
  </a>
);

export default Button;