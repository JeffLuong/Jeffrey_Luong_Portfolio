"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _match = require("preact-router/match");

var _classnames = _interopRequireDefault(require("classnames"));

var styles = _interopRequireWildcard({
  "NavHeader": "_2Cto8GxtMyIZcyuYDTCCMQ",
  "active": "_3fytbhkAcI5a0iNuIjkmAe",
  "HomeLink": "_1qMax690i4GTzK31WWDv0M",
  "isDark": "F7Z0Uqe39FaepxXG8gsnU"
});

var _data = require("../../data");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = (_ref) => {
  var {
    goDark
  } = _ref;
  return (0, _preact.h)("header", {
    className: (0, _classnames.default)(styles.NavHeader, {
      [styles.isDark]: goDark
    })
  }, (0, _preact.h)("nav", null, (0, _preact.h)(_match.Link, {
    className: styles.HomeLink,
    href: "/"
  }, "Jeff"), (0, _preact.h)("ul", null, _data.UrlPaths.filter(p => p !== '/').map(path => (0, _preact.h)("li", null, (0, _preact.h)(_match.Link, {
    activeClassName: styles.active,
    href: path
  }, _data.UrlMap[path].name))))));
};

var _default = Navigation;
exports.default = _default;