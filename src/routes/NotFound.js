import { h } from 'preact';
import DocumentHead from '../components/DocumentHead';
import { DefaultTitle, BaseUrl } from '../utils/constants';

const NotFound = ({ url }) => (
  <DocumentHead title={`${DefaultTitle} | Not Found`} canonicalUrl={`${BaseUrl}${url}`}>
    <div>
      <h1>Whoops!</h1>
    </div>
  </DocumentHead>
);

export default NotFound;