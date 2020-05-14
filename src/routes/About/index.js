import { h } from 'preact';
import { useState } from 'preact/hooks';

import DocumentHead from '../../components/DocumentHead';
import { UrlMap, BaseUrl, SocialLinks } from '../../data';
import Head from '../../components/Svg/Head';
import Section from '../../components/Section';
import FlexContainer from '../../components/FlexContainer';

import * as styles from './About.scss';
import ExternalLink from '../../components/ExternalLink';
import Drawer from '../../components/Drawer';
import Button from '../../components/Button';
import Resume from '../../components/Resume';

const About = ({ path }) => {
  const [isViewingResume, setResumeViewing] = useState(false);
  return (
    <DocumentHead title={UrlMap[path].title} description={UrlMap[path].description} canonicalUrl={`${BaseUrl}${path}`}>
      <Section>
        <FlexContainer style={{ justifyContent: 'left', margin: '2rem 0 0' }}>
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
            <div className={styles.AboutResume}>
              <Button onClick={() => setResumeViewing(true)}>
                See Resume
              </Button>
            </div>
          </div>
          <Head className={styles.SvgHead} />
          {isViewingResume &&
            <Drawer className={styles.ResumeDrawer} onClose={() => setResumeViewing(false)}>
              <Resume />
            </Drawer>
          }
        </FlexContainer>
      </Section>
    </DocumentHead>
  );
};

export default About;