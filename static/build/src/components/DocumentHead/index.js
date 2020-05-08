"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var DocumentHead = (_ref) => {
  var {
    title,
    canonicalUrl,
    children
  } = _ref;
  var {
    document
  } = global;

  if (document) {
    document.title = title;
    var link = document.querySelector('link[rel="canonical"]') || document.createElement('link');

    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'canonical');
    }

    link.setAttribute('href', canonicalUrl);
  }

  return (0, _preact.h)(_preact.Fragment, null, children);
};

var _default = DocumentHead;
exports.default = _default;