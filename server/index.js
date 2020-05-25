import express from 'express';
import fs from 'fs';
import compression from 'compression';
import NodeCache from 'node-cache';
import path from 'path';
import render from 'preact-render-to-string';
import { h } from 'preact';
import BaseTemplate from './base-template';

import App from '../src/components/App';
import { DefaultDescription, DefaultTitle, UrlMap } from '../src/data';

const app = express();
const PORT = process.env.PORT || 4000;
const cache = new NodeCache({ stdTTL: 300 }); // 5 mins TTL
const staticDir = process.env.NODE_COMPILED === 'COMPILED' ?
  path.join(__dirname, '../../') :
  path.join(__dirname, '../static');

const robotsFile = fs.readFileSync(path.join(staticDir, 'robots.txt')).toString();

app.use(compression());
app.use('/static', express.static(staticDir));

app.use((req, res, next) => {
  // Using `x-forwarded-proto` because under the hood, Heroku router (over)writes the X-Forwarded-Proto
  // and the X-Forwarded-Port request headers: https://help.heroku.com/J2R1S4T8/can-heroku-force-an-application-to-use-ssl-tls
  if (req.headers.host.includes('localhost') || req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
});

app.get('/robots.txt', (req, res) => {
  res.send(robotsFile);
});

app.get(/^(?!(\/static|\/dist)).+/, (req, res) => {
  const { url } = req;

  if (!url.includes('favicon.ico')) {
    let page = cache.get(url);
  
    if (!page) {
      const pageMap = UrlMap[url];
      const title = pageMap && pageMap.title || DefaultTitle;
      const description = pageMap && pageMap.description || DefaultDescription;
      const canonicalUrl = `https://www.jeffreyluong.com${url}`;
      page = BaseTemplate(
        { title, description, canonicalUrl },
        render(h(App, { url }))
      );
      cache.set(url, page);
    }
  
    res.send(page);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});