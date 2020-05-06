import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Router, getCurrentUrl } from 'preact-router';
import cx from 'classnames';

import Navigation from './Navigation';

import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import Work from '../routes/Work';
import Photography from '../routes/Photography';

import * as styles from './App.scss';

const getRouteClass = path => {
  switch (path) {
    case '/about':
      return styles.isAboutPage;
    case '/work':
      return styles.isWorkPage;
    default:
      return styles.isHomePage;
  }
};

const App = props => {
  // For SSR, `url` is a prop that is passed into <App>
  const path = global.window ? getCurrentUrl() : props.url;
  const [bgClass, setBgClass] = useState(getRouteClass(path));
  const animate = async e => setBgClass(getRouteClass(e.url));

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
    </div>
  );
};

export default App;
