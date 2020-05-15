"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var styles = _interopRequireWildcard({
  "Footer": "_2erhFCYI-bm_PywxHn7AAQ",
  "FooterContent": "_1RyLqFMEUdCYSEH6B3XtT7"
});

var _ExternalLink = _interopRequireDefault(require("../ExternalLink"));

var _data = require("../../data");

var _useAnalytics = _interopRequireDefault(require("../../hooks/useAnalytics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Footer = () => {
  var {
    trackClick
  } = (0, _useAnalytics.default)();

  var trackViewSrc = () => {
    if (trackClick) {
      trackClick({
        hitType: 'event',
        eventCategory: 'Source Code',
        eventAction: 'click',
        eventLabel: 'View Source Code'
      });
    }
  };

  return (0, _preact.h)("footer", {
    className: styles.Footer
  }, (0, _preact.h)("div", {
    className: styles.FooterContent
  }, (0, _preact.h)("small", {
    style: {
      display: 'block',
      marginBottom: '.5rem'
    }
  }, (0, _preact.h)(_ExternalLink.default, {
    onClick: trackViewSrc,
    href: _data.SourceCodeUrl
  }, "View source ", "</>")), (0, _preact.h)("small", null, "\xA9 ", new Date().getFullYear(), " Jeffrey Luong")));
};

var _default = Footer;
exports.default = _default;