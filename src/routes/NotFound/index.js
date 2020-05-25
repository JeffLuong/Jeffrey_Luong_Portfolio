import { h } from 'preact';
import DocumentHead from '../../components/DocumentHead';
import { DefaultTitle, BaseUrl } from '../../data';
import Section from '../../components/Section';
import FlexContainer from '../../components/FlexContainer';

const NotFound = ({ url }) => (
  <DocumentHead title={`${DefaultTitle} | Not Found`} description="Something went wrong!" canonicalUrl={`${BaseUrl}${url}`}>
    <Section>
      <FlexContainer style={{ padding: '2rem 0' }}>
        <h1 style={{ textAlign: 'center' }}>Is the page you're looking for? 🤔</h1>
        <h3 style={{ textAlign: 'center' }}>Well if it is, it doesn't seem to exist. Hope you can find a new destination though!</h3>
      </FlexContainer>
    </Section>
  </DocumentHead>
);

export default NotFound;