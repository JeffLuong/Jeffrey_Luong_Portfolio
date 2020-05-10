"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _data = require("../../data");

var _AnimatedText = _interopRequireDefault(require("../../components/AnimatedText"));

var _AnimatedLine = _interopRequireDefault(require("../../components/AnimatedLine"));

var _Section = _interopRequireDefault(require("../../components/Section"));

var styles = _interopRequireWildcard({
  "Home": "_249ZmK2tAOFWbQTSyrzOgL",
  "HomeHeroContainer": "_2hD93gknrK3ZOeRBzqQLPv",
  "HeroText": "_3IZcZ287wGSY1Y7TNx7_Vv",
  "HeroSubText": "_3nh9lHJl2r8YrYPxLLlR7M"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_ref) => {
  var {
    path
  } = _ref;
  return (0, _preact.h)(_DocumentHead.default, {
    title: _data.UrlMap[path].title,
    description: _data.UrlMap[path].description,
    canonicalUrl: "".concat(_data.BaseUrl).concat(path)
  }, (0, _preact.h)(_Section.default, {
    className: styles.Home
  }, (0, _preact.h)("div", {
    className: styles.HomeHeroContainer
  }, (0, _preact.h)(_AnimatedText.default, {
    TagName: "h1",
    className: styles.HeroText,
    delay: 450
  }, "Hi, my name is Jeff"), (0, _preact.h)(_AnimatedLine.default, null), (0, _preact.h)(_AnimatedText.default, {
    TagName: "h2",
    animationType: "slide-in",
    className: styles.HeroSubText,
    delay: 1000
  }, "Front End / UI Engineer"))));
};

var _default = Home;
exports.default = _default;