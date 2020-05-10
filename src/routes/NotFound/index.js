import { h } from 'preact';
import DocumentHead from '../../components/DocumentHead';
import { DefaultTitle, BaseUrl } from '../../data';

const NotFound = ({ url }) => (
  <DocumentHead title={`${DefaultTitle} | Not Found`} description="Something went wrong!" canonicalUrl={`${BaseUrl}${url}`}>
    <div>
      <h1>Whoops!</h1>
    </div>
  </DocumentHead>
);

export default NotFound;