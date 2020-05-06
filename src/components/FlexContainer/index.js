import { h } from 'preact';

const FlexContainer = ({ children, style }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0 -1rem',
      ...style
    }}>
    {children}
  </div>
);

export default FlexContainer;