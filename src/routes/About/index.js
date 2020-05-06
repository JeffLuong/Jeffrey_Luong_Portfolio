import { h } from 'preact';
import DocumentHead from '../../components/DocumentHead';
import { UrlMap, BaseUrl } from '../../utils/constants';

const About = ({ path }) => (
  <DocumentHead title={UrlMap[path].title} canonicalUrl={`${BaseUrl}${path}`}>
    <div>
      <p>
        I am a Front End / UI Engineer with a passion for design and user interactivity.
      </p>
      <p>
        I believe that great applications consist not only of elegant code, but also great design. My goal is to build beautiful experiences that work beautifully!
      </p>
      <p>
        When I'm not programming, I like to spend my time traveling, taking digital and film photos, visiting museums, gaming and biking.
      </p>
    </div>
  </DocumentHead>
);

export default About;