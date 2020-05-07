"use strict";

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _nodeCache = _interopRequireDefault(require("node-cache"));

var _path = _interopRequireDefault(require("path"));

var _preactRenderToString = _interopRequireDefault(require("preact-render-to-string"));

var _preact = require("preact");

var _baseTemplate = _interopRequireDefault(require("./base-template"));

var _App = _interopRequireDefault(require("../src/components/App"));

var _constants = require("../src/utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 4000;
var cache = new _nodeCache.default({
  stdTTL: 300
}); // 5 mins TTL

var staticDir = process.env.NODE_COMPILED === 'COMPILED' ? _path.default.join(__dirname, '../../') : _path.default.join(__dirname, '../static');
app.use((0, _compression.default)());
app.use('/static', _express.default.static(staticDir));
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    console.log("https://".concat(req.headers.host).concat(req.url));
    next(); // res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
});
app.get(/^\/(?!static|dist(\/|$)).*$/, (req, res) => {
  var {
    url
  } = req;
  var page = cache.get(url);

  if (!page) {
    var title = (0, _constants.hasPageTitle)(url) ? _constants.UrlMap[url].title : _constants.DefaultTitle;
    var canonicalUrl = "https://www.jeffreyluong.com".concat(url);
    page = (0, _baseTemplate.default)({
      title,
      canonicalUrl
    }, (0, _preactRenderToString.default)((0, _preact.h)(_App.default, {
      url
    })));
    cache.set(url, page);
  }

  res.send(page);
});
app.listen(PORT, () => {
  console.log("Server running on port ".concat(PORT));
});