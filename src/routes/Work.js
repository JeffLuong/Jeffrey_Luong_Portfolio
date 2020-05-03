import { h } from 'preact';
import DocumentHead from '../components/DocumentHead';
import { BaseUrl, UrlTitleMap } from '../utils/constants';

const Work = ({ path }) => (
	<DocumentHead title={UrlTitleMap[path]} canonicalUrl={`${BaseUrl}${path}`}>
		<div>
			<h1>Jeffrey's works page</h1>
		</div>
	</DocumentHead>
);

export default Work;