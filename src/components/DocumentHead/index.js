import { Fragment, h } from 'preact';

const DocumentHead = ({ title, canonicalUrl, children }) => {
  const { document } = global;
  if (document) {
    document.title = title;

    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'canonical');
    }
    link.setAttribute('href', canonicalUrl);
  }
  return <Fragment>{children}</Fragment>;
};

export default DocumentHead;