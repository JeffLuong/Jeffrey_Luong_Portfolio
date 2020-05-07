"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _Section = _interopRequireDefault(require("../../components/Section"));

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _FlexContainer = _interopRequireDefault(require("../../components/FlexContainer"));

var _constants = require("../../utils/constants");

var _Tile = _interopRequireDefault(require("../../components/Tile"));

var styles = _interopRequireWildcard({
  "PhotoGroup": "_19EnFBKu2yslHMK69ysgte"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Photography = (_ref) => {
  var {
    path
  } = _ref;
  return (0, _preact.h)(_DocumentHead.default, {
    title: _constants.UrlMap[path].title,
    canonicalUrl: "".concat(_constants.BaseUrl).concat(path)
  }, (0, _preact.h)(_Section.default, null, (0, _preact.h)(_FlexContainer.default, null, _constants.Photos.map((_ref2) => {
    var [type, photos] = _ref2;
    return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("h3", {
      className: styles.PhotoGroupTitle
    }, type), (0, _preact.h)("ul", {
      className: styles.PhotoGroup
    }, photos.map(src => (0, _preact.h)("li", null, (0, _preact.h)(_Tile.default, {
      isClickable: false
    }, (0, _preact.h)("img", {
      src: src
    }))))));
  }))));
};

var _default = Photography;
exports.default = _default;