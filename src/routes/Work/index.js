import { h } from 'preact';
import { useState } from 'preact/hooks';

import DocumentHead from '../../components/DocumentHead';
import { BaseUrl, UrlMap, FeaturedWork } from '../../utils/constants';
import Tile, { TileTrigger } from '../../components/Tile';
import Section from '../../components/Section';
import FlexContainer from '../../components/FlexContainer';
import useCachedHandlers from '../../hooks/useCachedHandlers';
import Drawer from '../../components/Drawer';
import Lightning from '../../components/Svg/Lightning';

import * as styles from './Work.scss';
import { ButtonLink } from '../../components/Button';

const Work = ({ path }) => {
  const [work, setCurrWork] = useState('');
  const [getHandlers] = useCachedHandlers(e => {
    const { selectedWork } = e.currentTarget.dataset;
    if (selectedWork) {
      setCurrWork(FeaturedWork.find(w => w.url === selectedWork));
    }
  });

  return (
    <DocumentHead title={UrlMap[path].title} canonicalUrl={`${BaseUrl}${path}`}>
      <Section>
        <article>
          <h1 className={styles.WorkHeader}>Selected Works</h1>
          <FlexContainer>
            {FeaturedWork.map(work => {
              const { name, img, url } = work;
              return (
                <TileTrigger onClick={getHandlers(url)} data-selected-work={url}>
                  <Tile className={url.includes('usebutton.com') ? styles.BtnBg : ''}>
                    <img src={img} alt={`${name} Image`} />
                  </Tile>
                </TileTrigger>
              )
            })}
          </FlexContainer>
          {work &&
            <Drawer onClose={() => setCurrWork('')}>
              <h2 style={{ color: '#006199' }}>{work.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: work.description }} />
              <h3 style={{ marginTop: '1.5rem' }}>Tech used:</h3>
              <ul>
                {work.tech.map(t => <li><Lightning />{t}</li>)}
              </ul>
              <ButtonLink
                style={{ display: 'block', marginTop: '2rem' }}
                href={work.url}
                isExternal>
                View Project
              </ButtonLink>
            </Drawer>
          }
        </article>
      </Section>
    </DocumentHead>
  );
};

export default Work;