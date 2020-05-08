import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Router, getCurrentUrl } from 'preact-router';
import cx from 'classnames';

import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import Work from '../routes/Work';
import Photography from '../routes/Photography';
import usePageViewTracker from '../hooks/usePageViewTracker';

import Navigation from './Navigation';
import Footer from './Footer';
import * as styles from './App.scss';

const getRouteClass = path => {
  switch (path) {
    case '/':
      return styles.isHomePage;
    default:
      return styles.isAnyPage;
  }
};

const App = props => {
  // For SSR, `url` is a prop that is passed into <App>
  const path = global.window ? getCurrentUrl() : props.url;
  const [statePath, setStatePath] = useState(path);
  const [bgClass, setBgClass] = useState(getRouteClass(path));
  const pageTracker = usePageViewTracker();
  const animate = async e => {
    setStatePath(e.url);
    setBgClass(getRouteClass(e.url));
  };

  useEffect(() => {
    if (pageTracker) {
      pageTracker(statePath);
    }
  }, [statePath]);

  return (
    <div className={cx(styles.AppInnerWrapper, bgClass)}>
      <Navigation path={path} goDark={path === '/'} />
      <main className={styles.Main}>
        <Router onChange={animate} {...props}>
          <Home path="/" />
          <About path="/about" />
          <Work path="/work" />
          <Photography path="/photography" />
          <NotFound default />
        </Router>
      </main>
      {path !== '/' &&
        <Footer />
      }
    </div>
  );
};

export default App;
