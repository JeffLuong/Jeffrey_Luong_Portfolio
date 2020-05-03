import { h } from 'preact';
import { Link } from 'preact-router/match';
import * as styles from './Navigation.scss';

const Navigation = () => (
	<header className={styles.header}>
		<nav>
			<Link activeClassName={styles.active} href="/">Home</Link>
			<Link activeClassName={styles.active} href="/about">About</Link>
		</nav>
	</header>
);

export default Navigation;
