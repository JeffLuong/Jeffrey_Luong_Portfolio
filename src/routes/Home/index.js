import { h } from 'preact';

import DocumentHead from '../../components/DocumentHead';
import { UrlMap, BaseUrl } from '../../utils/constants';
import AnimatedText from '../../components/AnimatedText';
import AnimatedLine from '../../components/AnimatedLine';

import * as styles from './Home.scss';

const Home = ({ path }) => (
  <DocumentHead title={UrlMap[path].title} canonicalUrl={`${BaseUrl}${path}`}>
    <section className={styles.Home}>
      <div className={styles.HomeHeroContainer}>
        <AnimatedText TagName="h1" className={styles.HeroText} delay={450}>
          Hi, my name is Jeff
        </AnimatedText>
        <AnimatedLine />
        <AnimatedText TagName="h2" animationType="slide-in" className={styles.HeroSubText} delay={1000}>
          Front End / UI Engineer
        </AnimatedText>
      </div>
    </section>
  </DocumentHead>
);

export default Home;
