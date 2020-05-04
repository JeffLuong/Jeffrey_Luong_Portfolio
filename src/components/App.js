import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Router, getCurrentUrl } from 'preact-router';
import cx from 'classnames';

import Navigation from './Navigation';

import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import Work from '../routes/Work';

import * as styles from './App.scss';

const getRouteClass = path => {
  switch (path) {
    case '/about':
      return styles.isAboutPage;
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
    <div className={styles.AppInnerWrapper}>
      <Navigation path={path} />
      <main className={cx(styles.Main, bgClass)}>
        <Router onChange={animate} {...props}>
          <Home path="/" />
          <About path="/about" />
          <Work path="/work" />
          <NotFound default />
        </Router>
      </main>
    </div>
  );
};

export default App;
