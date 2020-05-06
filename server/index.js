import express from 'express';
import path from 'path';
import render from 'preact-render-to-string';
import { h } from 'preact';
import BaseTemplate from './base-template';

import App from '../src/components/App';
import { DefaultTitle, hasPageTitle, UrlMap } from '../src/utils/constants';

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/static', express.static(path.join(__dirname, '../static')));

app.get(/^\/(?!static|dist(\/|$)).*$/, (req, res) => {
  const { url } = req;
  const title = hasPageTitle(url) ? UrlMap[url].title : DefaultTitle;
  const canonicalUrl = `https://www.jeffreyluong.com${url}`;

  res.send(
    BaseTemplate(
      { title, canonicalUrl },
      render(h(App, { url }))
    )
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});