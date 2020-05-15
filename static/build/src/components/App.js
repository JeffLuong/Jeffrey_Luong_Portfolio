"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _preactRouter = require("preact-router");

var _classnames = _interopRequireDefault(require("classnames"));

var _Home = _interopRequireDefault(require("../routes/Home"));

var _About = _interopRequireDefault(require("../routes/About"));

var _NotFound = _interopRequireDefault(require("../routes/NotFound"));

var _Work = _interopRequireDefault(require("../routes/Work"));

var _Photography = _interopRequireDefault(require("../routes/Photography"));

var _useAnalytics = _interopRequireDefault(require("../hooks/useAnalytics"));

var _Navigation = _interopRequireDefault(require("./Navigation"));

var _Footer = _interopRequireDefault(require("./Footer"));

var styles = _interopRequireWildcard({
  "AppInnerWrapper": "_1C0l6F_1L6wsYrxszDv7W2",
  "isHomePage": "_2guxLA8Cf_lwN-S-GwCPLZ",
  "isAnyPage": "_1noo3-EzYi-j3r1J8SF2_w",
  "Main": "_2JjXnbTogmTxQp6bdVeKTU"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getRouteClass = path => {
  switch (path) {
    case '/':
      return styles.isHomePage;

    default:
      return styles.isAnyPage;
  }
};

var App = props => {
  // For SSR, `url` is a prop that is passed into <App>
  var path = global.window ? (0, _preactRouter.getCurrentUrl)() : props.url;
  var [statePath, setStatePath] = (0, _hooks.useState)(path);
  var [bgClass, setBgClass] = (0, _hooks.useState)(getRouteClass(path));
  var {
    trackPageView
  } = (0, _useAnalytics.default)();

  var animate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      setStatePath(e.url);
      setBgClass(getRouteClass(e.url));
    });

    return function animate(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _hooks.useEffect)(() => {
    if (trackPageView) {
      trackPageView(statePath);
    }
  }, [statePath, trackPageView]);
  return (0, _preact.h)("div", {
    className: (0, _classnames.default)(styles.AppInnerWrapper, bgClass)
  }, (0, _preact.h)(_Navigation.default, {
    path: path,
    goDark: path === '/'
  }), (0, _preact.h)("main", {
    className: styles.Main
  }, (0, _preact.h)(_preactRouter.Router, _extends({
    onChange: animate
  }, props), (0, _preact.h)(_Home.default, {
    path: "/"
  }), (0, _preact.h)(_About.default, {
    path: "/about"
  }), (0, _preact.h)(_Work.default, {
    path: "/work"
  }), (0, _preact.h)(_Photography.default, {
    path: "/photography"
  }), (0, _preact.h)(_NotFound.default, {
    default: true
  }))), path !== '/' && (0, _preact.h)(_Footer.default, null));
};

var _default = App;
exports.default = _default;