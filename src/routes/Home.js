import { h } from 'preact';
import DocumentHead from '../components/DocumentHead';
import { UrlTitleMap, BaseUrl } from '../utils/constants';
// import style from './style';

const Home = ({ path }) => (
	// <div class={style.home}>
	<DocumentHead title={UrlTitleMap[path]} canonicalUrl={`${BaseUrl}${path}`}>
		<div>
			<h1>Home</h1>
			<p>This is the Home component.</p>
		</div>
	</DocumentHead>
);

export default Home;
