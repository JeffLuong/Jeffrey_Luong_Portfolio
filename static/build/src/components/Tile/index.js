"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TileTrigger = void 0;

var _preact = require("preact");

var _classnames = _interopRequireDefault(require("classnames"));

var styles = _interopRequireWildcard({
  "Tile": "_1apu6Sou8bTaIe-ehpxUeR",
  "overPop": "_1VqJwmpsH1F4IjVUDmvPYf",
  "isClickable": "_18V-qWWA44jKo3lOa7omBa",
  "TileTrigger": "_22YsUGl1mm9fxBjDjTZo89",
  "popIn": "_3S8AK7DQyC3de_iaoZz2iR"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tile = (_ref) => {
  var {
    className,
    children,
    isClickable = true
  } = _ref;
  return (0, _preact.h)("div", {
    className: (0, _classnames.default)(styles.Tile, className, {
      [styles.isClickable]: isClickable
    })
  }, children);
};

var TileTrigger = (_ref2) => {
  var {
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return (0, _preact.h)("button", _extends({
    className: styles.TileTrigger,
    type: "button"
  }, rest), children);
};

exports.TileTrigger = TileTrigger;
var _default = Tile;
exports.default = _default;