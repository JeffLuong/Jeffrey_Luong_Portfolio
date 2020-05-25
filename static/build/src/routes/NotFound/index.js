"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _data = require("../../data");

var _Section = _interopRequireDefault(require("../../components/Section"));

var _FlexContainer = _interopRequireDefault(require("../../components/FlexContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = (_ref) => {
  var {
    url
  } = _ref;
  return (0, _preact.h)(_DocumentHead.default, {
    title: "".concat(_data.DefaultTitle, " | Not Found"),
    description: "Something went wrong!",
    canonicalUrl: "".concat(_data.BaseUrl).concat(url)
  }, (0, _preact.h)(_Section.default, null, (0, _preact.h)(_FlexContainer.default, {
    style: {
      padding: '2rem 0'
    }
  }, (0, _preact.h)("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Is the page you're looking for? \uD83E\uDD14"), (0, _preact.h)("h3", {
    style: {
      textAlign: 'center'
    }
  }, "Well if it is, it doesn't seem to exist. Hope you can find a new destination though!"))));
};

var _default = NotFound;
exports.default = _default;