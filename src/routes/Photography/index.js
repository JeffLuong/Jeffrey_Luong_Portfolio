import { h, Fragment } from 'preact';

import Section from '../../components/Section';
import DocumentHead from '../../components/DocumentHead';
import FlexContainer from '../../components/FlexContainer';
import { BaseUrl, Photos, UrlMap } from '../../data';
import Tile from '../../components/Tile';

import * as styles from './Photography.scss';

const Photography = ({ path }) => (
  <DocumentHead title={UrlMap[path].title} canonicalUrl={`${BaseUrl}${path}`}>
    <Section>
      <FlexContainer>
        {Photos.map(([type, photos]) => (
          <Fragment>
            <h3 className={styles.PhotoGroupTitle}>{type}</h3>
            <ul className={styles.PhotoGroup}>
              {photos.map(src => (
                <li>
                  <Tile isClickable={false}>
                    <img src={src} />
                  </Tile>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </FlexContainer>
    </Section>
  </DocumentHead>
);

export default Photography;