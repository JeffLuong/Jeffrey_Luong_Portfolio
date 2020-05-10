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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Footer = () => (0, _preact.h)("footer", {
  className: styles.Footer
}, (0, _preact.h)("div", {
  className: styles.FooterContent
}, (0, _preact.h)("span", null, "\xA9 ", (0, _preact.h)("span", {
  class: "app-year"
}, new Date().getFullYear()), " Jeffrey Luong")));

var _default = Footer;
exports.default = _default;