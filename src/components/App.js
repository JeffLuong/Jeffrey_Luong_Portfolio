import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';

// Code-splitting is automated for routes
import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import * as styles from './App.scss';

const App = props => (
	<main className={styles.Main}>
		<Header />
		<Router {...props}>
			<Home path="/" />
			<About path="/about" />
			<NotFound default />
		</Router>
	</main>
);

export default App;
