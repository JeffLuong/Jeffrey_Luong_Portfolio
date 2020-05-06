import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import useSnap from '../../hooks/useSnap';
import DocumentHead from '../../components/DocumentHead';
import { UrlMap, BaseUrl, SocialLinks } from '../../utils/constants';
import Head from '../../components/Svg/Head';
import Section from '../../components/Section';
import FlexContainer from '../../components/FlexContainer';

import * as styles from './About.scss';
import ExternalLink from '../../components/ExternalLink';

const About = ({ path }) => {
  const [setupSvg] = useSnap();
  const svgRef = useRef();

  useEffect(() => {
    if (setupSvg) {
    setupSvg(svgRef);
    }
  }, [setupSvg]);

  return (
    <DocumentHead title={UrlMap[path].title} canonicalUrl={`${BaseUrl}${path}`}>
      <Section>
        <FlexContainer style={{ justifyContent: 'left', margin: '2rem 0 0', alignItems: 'center' }}>
          <div className={styles.AboutDescription}>
            <h1 className={styles.AboutHeader}>Jeffrey Luong</h1>
            <h3 className={styles.AboutSubHeader}>Front End / UI Engineer</h3>
            <p style={{ marginBottom: '3rem' }}>
              I am a specialist on the front end with a passion for design and user interactivity. I believe that delightful web experiences should not only be built using elegant code, but also with great design. My career goal is to collaborate with amazing people to build beautiful experiences that work beautifully.
            </p>
            <p>Let's connect!</p>
            <ul className={styles.AboutSocials}>
              {SocialLinks.map(([name, url]) => (
                <li><ExternalLink href={url}>{name}</ExternalLink></li>
              ))}
            </ul>
          </div>
          <Head className={styles.SvgHead} svgRef={svgRef} />
        </FlexContainer>
      </Section>
    </DocumentHead>
  );
};

export default About;