import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import DocumentHead from '../../components/DocumentHead';
import { UrlTitleMap, BaseUrl } from '../../utils/constants';
import * as styles from './Home.scss';
import useSnap from '../../hooks/useSnap';
import AnimatedText from '../../components/AnimatedText';
import AnimatedLine from '../../components/AnimatedLine';

const Home = ({ path }) => {
  const [setupSvg] = useSnap();
  const svgRef = useRef();

  useEffect(() => {
    if (setupSvg) {
    setupSvg(svgRef);
    }
  }, [setupSvg]);

  return (
    <DocumentHead title={UrlTitleMap[path]} canonicalUrl={`${BaseUrl}${path}`}>
      <section className={styles.Home}>
        <div className={styles.HomeHeroContainer}>
          <AnimatedText TagName="h1" className={styles.HeroText} delay={450}>
            Hi, my name is Jeff
          </AnimatedText>
          <AnimatedLine />
          <AnimatedText TagName="h2" animationType="slide-in" className={styles.HeroSubText} delay={1000}>
            Front End / UI Engineer
          </AnimatedText>
          <svg ref={svgRef}><path fillRule="evenodd" clipRule="evenodd" d="M453.295 55.8169C457.765 52.6455 464.297 52.8227 467.89 56.2128V56.2128C471.651 59.7621 470.677 65.3812 465.764 68.4658L202.316 233.9L453.295 55.8169Z" fill="url(#paint0_linear)" fillOpacity="0.75" /></svg>
        </div>
      </section>
    </DocumentHead>
  );
};

export default Home;
