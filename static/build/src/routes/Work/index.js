"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _DocumentHead = _interopRequireDefault(require("../../components/DocumentHead"));

var _data = require("../../data");

var _Tile = _interopRequireWildcard(require("../../components/Tile"));

var _Section = _interopRequireDefault(require("../../components/Section"));

var _FlexContainer = _interopRequireDefault(require("../../components/FlexContainer"));

var _useCachedHandlers = _interopRequireDefault(require("../../hooks/useCachedHandlers"));

var _Drawer = _interopRequireDefault(require("../../components/Drawer"));

var _Lightning = _interopRequireDefault(require("../../components/Svg/Lightning"));

var _Button = require("../../components/Button");

var styles = _interopRequireWildcard({
  "WorkHeader": "_1ryKWaixUeQVCGa5QaXGIB",
  "BtnBg": "Lixtra6kmRwIwvgi8o6Am",
  "WorkDrawer": "_31Y5L5Gdg7C36IOY2VzUZ9"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Work = (_ref) => {
  var {
    path
  } = _ref;
  var [work, setCurrWork] = (0, _hooks.useState)('');
  var [getHandlers] = (0, _useCachedHandlers.default)(e => {
    var {
      selectedWork
    } = e.currentTarget.dataset;

    if (selectedWork) {
      setCurrWork(_data.FeaturedWork.find(w => w.url === selectedWork));
    }
  });
  return (0, _preact.h)(_DocumentHead.default, {
    title: _data.UrlMap[path].title,
    description: _data.UrlMap[path].description,
    canonicalUrl: "".concat(_data.BaseUrl).concat(path)
  }, (0, _preact.h)(_Section.default, null, (0, _preact.h)("article", null, (0, _preact.h)("h1", {
    className: styles.WorkHeader
  }, "Selected Works"), (0, _preact.h)(_FlexContainer.default, null, _data.FeaturedWork.map(work => {
    var {
      name,
      img,
      url
    } = work;
    return (0, _preact.h)(_Tile.TileTrigger, {
      onClick: getHandlers(url),
      "data-selected-work": url
    }, (0, _preact.h)(_Tile.default, {
      className: url.includes('usebutton.com') ? styles.BtnBg : ''
    }, (0, _preact.h)("img", {
      src: img,
      alt: "".concat(name, " Image")
    })));
  })), work && (0, _preact.h)(_Drawer.default, {
    className: styles.WorkDrawer,
    onClose: () => setCurrWork('')
  }, (0, _preact.h)("h2", {
    style: {
      color: '#006199'
    }
  }, work.name), (0, _preact.h)("p", {
    dangerouslySetInnerHTML: {
      __html: work.description
    }
  }), (0, _preact.h)("h3", {
    style: {
      marginTop: '1.5rem'
    }
  }, "Tech used:"), (0, _preact.h)("ul", null, work.tech.map(t => (0, _preact.h)("li", null, (0, _preact.h)(_Lightning.default, null), t))), (0, _preact.h)(_Button.ButtonLink, {
    style: {
      display: 'block',
      marginTop: '2rem'
    },
    href: work.url,
    isExternal: true
  }, "View Project")))));
};

var _default = Work;
exports.default = _default;