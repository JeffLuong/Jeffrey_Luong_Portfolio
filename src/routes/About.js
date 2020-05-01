import { h } from 'preact';
import DocumentHead from '../components/DocumentHead';
// import style from './style';
import { UrlTitleMap, BaseUrl } from '../utils/constants';

const About = ({ path }) => (
	// <div class={style.profile}>
	<DocumentHead title={UrlTitleMap[path]} canonicalUrl={`${BaseUrl}${path}`}>
		<div>
			<h1>Jeffrey's about page</h1>
		</div>
	</DocumentHead>
);

export default About;