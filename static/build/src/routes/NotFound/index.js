"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _data = require("../../data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = (_ref) => {
  var {
    url
  } = _ref;
  return (0, _preact.h)(_DocumentHead.default, {
    title: "".concat(_data.DefaultTitle, " | Not Found"),
    description: "Something went wrong!",
    canonicalUrl: "".concat(_data.BaseUrl).concat(url)
  }, (0, _preact.h)("div", null, (0, _preact.h)("h1", null, "Whoops!")));
};

var _default = NotFound;
exports.default = _default;