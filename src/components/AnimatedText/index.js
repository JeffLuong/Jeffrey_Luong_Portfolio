import { h } from 'preact';
import { useState } from 'preact/hooks';
import cx from 'classnames';

import * as styles from './AnimatedText.scss';
import useTimeout from '../../hooks/useTimeout';

const Letter = ({ children, delay, className }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useTimeout(() => {
    setIsAnimated(true);
  }, delay);

  return (
    <span
      className={cx(styles.Letter, className, { [styles.isAnimated]: isAnimated })}
      style={isAnimated ? {} : { transform: 'translateY(100%)', opacity: 0 }}>
      {children}
    </span>
  );
};

const AnimatedText = ({ TagName, children, animationType, className, delay: animationDelay }) => {
  const useSlideIn = animationType === 'slide-in';
  const animationClass = useSlideIn ? styles.useSlideIn : styles.useFadeUp
  const letters = children.split('');
  let start = 0;
  return (
    <TagName className={cx(styles.AnimatedText, className)}>
      {letters.map((letter, i) => {
        const delay = useSlideIn ?
          `${((letters.length - start) * 50) + animationDelay}` :
          `${((i + start) * 25) + animationDelay}`;

        if (/^[\s]/.test(letter)) {
          return <span>&nbsp;</span>;
        }

        start++;

        return <Letter className={animationClass} delay={delay}>{letter}</Letter>;
    })}
    </TagName>
  )
};

export default AnimatedText;