import express from 'express';
import compression from 'compression';
import NodeCache from 'node-cache';
import path from 'path';
import render from 'preact-render-to-string';
import { h } from 'preact';
import BaseTemplate from './base-template';

import App from '../src/components/App';
import { DefaultTitle, hasPageTitle, UrlMap } from '../src/utils/constants';

const app = express();
const PORT = process.env.PORT || 4000;
const cache = new NodeCache({ stdTTL: 300 }); // 5 mins TTL
const staticDir = process.env.NODE_COMPILED === 'COMPILED' ?
  path.join(__dirname, '../../') :
  path.join(__dirname, '../static');

app.use(compression());
app.use('/static', express.static(staticDir));

app.use((req, res, next) => {
  console.log('REQUEST FORWARDED PROTO-----', req.headers['x-forwarded-proto']);
  if (req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    const url = `https://${req.headers.host}${req.url}`;
    console.log(`Redirecting to.......  ${url}`);
    res.redirect(301, url);
  }
});

app.get(/^\/(?!static|dist(\/|$)).*$/, (req, res) => {
  const { url } = req;
  console.log(`Final requested URL......... ${url}`);
  let page = cache.get(url);

  if (!page) {
    const title = hasPageTitle(url) ? UrlMap[url].title : DefaultTitle;
    const canonicalUrl = `https://www.jeffreyluong.com${url}`;
    page = BaseTemplate(
      { title, canonicalUrl },
      render(h(App, { url }))
    );
    cache.set(url, page);
  }

  res.send(page);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});