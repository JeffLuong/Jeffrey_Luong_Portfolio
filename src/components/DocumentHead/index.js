import { Fragment, h } from 'preact';

const DocumentHead = ({ title, description, canonicalUrl, children }) => {
  const { document } = global;
  if (document) {
    document.title = title;

    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'canonical');
    }
    link.setAttribute('href', canonicalUrl);

    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    if (!meta.hasAttribute('name')) {
      meta.setAttribute('name', 'description');
    }
    meta.setAttribute('content', description);
  }
  return <Fragment>{children}</Fragment>;
};

export default DocumentHead;