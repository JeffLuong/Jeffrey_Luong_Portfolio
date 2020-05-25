"use strict";

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _nodeCache = _interopRequireDefault(require("node-cache"));

var _path = _interopRequireDefault(require("path"));

var _preactRenderToString = _interopRequireDefault(require("preact-render-to-string"));

var _preact = require("preact");

var _baseTemplate = _interopRequireDefault(require("./base-template"));

var _App = _interopRequireDefault(require("../src/components/App"));

var _data = require("../src/data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 4000;
var cache = new _nodeCache.default({
  stdTTL: 300
}); // 5 mins TTL

var staticDir = process.env.NODE_COMPILED === 'COMPILED' ? _path.default.join(__dirname, '../../') : _path.default.join(__dirname, '../static');

var robotsFile = _fs.default.readFileSync(_path.default.join(staticDir, 'robots.txt')).toString();

app.use((0, _compression.default)());
app.use('/static', _express.default.static(staticDir));
app.use((req, res, next) => {
  // Using `x-forwarded-proto` because under the hood, Heroku router (over)writes the X-Forwarded-Proto
  // and the X-Forwarded-Port request headers: https://help.heroku.com/J2R1S4T8/can-heroku-force-an-application-to-use-ssl-tls
  if (req.headers.host.includes('localhost') || req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    res.redirect(301, "https://".concat(req.headers.host).concat(req.url));
  }
});
app.get('/robots.txt', (req, res) => {
  res.send(robotsFile);
});
app.get(/^(?!(\/static|\/dist)).+/, (req, res) => {
  var {
    url
  } = req;

  if (!url.includes('favicon.ico')) {
    var page = cache.get(url);

    if (!page) {
      var pageMap = _data.UrlMap[url];
      var title = pageMap && pageMap.title || _data.DefaultTitle;
      var description = pageMap && pageMap.description || _data.DefaultDescription;
      var canonicalUrl = "https://www.jeffreyluong.com".concat(url);
      page = (0, _baseTemplate.default)({
        title,
        description,
        canonicalUrl
      }, (0, _preactRenderToString.default)((0, _preact.h)(_App.default, {
        url
      })));
      cache.set(url, page);
    }

    res.send(page);
  }
});
app.listen(PORT, () => {
  console.log("Server running on port ".concat(PORT));
});