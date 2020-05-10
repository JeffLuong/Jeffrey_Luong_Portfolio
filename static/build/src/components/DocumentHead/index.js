"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var DocumentHead = (_ref) => {
  var {
    title,
    description,
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
    var meta = document.querySelector('meta[name="description"]') || document.createElement('meta');

    if (!meta.hasAttribute('name')) {
      meta.setAttribute('name', 'description');
    }

    meta.setAttribute('content', description);
  }

  return (0, _preact.h)(_preact.Fragment, null, children);
};

var _default = DocumentHead;
exports.default = _default;