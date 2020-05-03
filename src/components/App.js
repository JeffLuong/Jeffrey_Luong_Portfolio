import { h, Fragment } from 'preact';
import { Router } from 'preact-router';

import Navigation from './Navigation';

// Code-splitting is automated for routes
import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import * as styles from './App.scss';

const App = props => (
	<div className={styles.AppInnerWrapper}>
		<Navigation />
		<main className={styles.Main}>
			<Router {...props}>
				<Home path="/" />
				<About path="/about" />
				<NotFound default />
			</Router>
		</main>
	</div>
);

export default App;
