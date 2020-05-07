"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _constants = require("../../utils/constants");

var _Head = _interopRequireDefault(require("../../components/Svg/Head"));

var _Section = _interopRequireDefault(require("../../components/Section"));

var _FlexContainer = _interopRequireDefault(require("../../components/FlexContainer"));

var styles = _interopRequireWildcard({
  "SvgHead": "_3TvTz3cJmMqiNESK_l9p52",
  "fadeUp": "_37wrl5nKza-Sn8OeOf41O_",
  "AboutDescription": "_3iUDvh60l7o5jk6PX0toMr",
  "fadeText": "_2W476b0zdmRZU3A9A4BaFY",
  "AboutHeader": "_4nbwdV9i0YxmLK9etjgqV",
  "AboutSubHeader": "_3bIdDtb1klCZEhAEnoGLa0",
  "AboutSocials": "_2t-5sCezmKjveORoSRJfe2"
});

var _ExternalLink = _interopRequireDefault(require("../../components/ExternalLink"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = (_ref) => {
  var {
    path
  } = _ref;
  return (0, _preact.h)(_DocumentHead.default, {
    title: _constants.UrlMap[path].title,
    canonicalUrl: "".concat(_constants.BaseUrl).concat(path)
  }, (0, _preact.h)(_Section.default, null, (0, _preact.h)(_FlexContainer.default, {
    style: {
      justifyContent: 'left',
      margin: '2rem 0 0',
      alignItems: 'center'
    }
  }, (0, _preact.h)("div", {
    className: styles.AboutDescription
  }, (0, _preact.h)("h1", {
    className: styles.AboutHeader
  }, "Jeffrey Luong"), (0, _preact.h)("h3", {
    className: styles.AboutSubHeader
  }, "Front End / UI Engineer"), (0, _preact.h)("p", {
    style: {
      marginBottom: '3rem'
    }
  }, "I am a specialist on the front end with a passion for design and user interactivity. I believe that delightful web experiences should not only be built using elegant code, but also with great design. My career goal is to collaborate with amazing people to build beautiful experiences that work beautifully."), (0, _preact.h)("p", null, "Let's connect!"), (0, _preact.h)("ul", {
    className: styles.AboutSocials
  }, _constants.SocialLinks.map((_ref2) => {
    var [name, url] = _ref2;
    return (0, _preact.h)("li", null, (0, _preact.h)(_ExternalLink.default, {
      href: url
    }, name));
  }))), (0, _preact.h)(_Head.default, {
    className: styles.SvgHead
  }))));
};

var _default = About;
exports.default = _default;