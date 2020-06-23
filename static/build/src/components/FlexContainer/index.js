"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _classnames = _interopRequireDefault(require("classnames"));

var styles = _interopRequireWildcard({
  "FlexContainer": "_1xNHTh5ilbm8wG3kbcG8YU",
  "justifyCenter": "_3RMXcmuRBH4Au9i8ADYkoA"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexContainer = (_ref) => {
  var {
    className,
    children,
    justifyCenter = true,
    style
  } = _ref;
  return (0, _preact.h)("div", {
    className: (0, _classnames.default)(styles.FlexContainer, {
      [styles.justifyCenter]: justifyCenter
    }, className),
    style: style
  }, children);
};

var _default = FlexContainer;
exports.default = _default;