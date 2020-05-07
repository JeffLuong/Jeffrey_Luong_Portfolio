"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _constants = require("../../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = (_ref) => {
  var {
    url
  } = _ref;
  return (0, _preact.h)(_DocumentHead.default, {
    title: "".concat(_constants.DefaultTitle, " | Not Found"),
    canonicalUrl: "".concat(_constants.BaseUrl).concat(url)
  }, (0, _preact.h)("div", null, (0, _preact.h)("h1", null, "Whoops!")));
};

var _default = NotFound;
exports.default = _default;