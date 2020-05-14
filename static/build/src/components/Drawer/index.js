"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _classnames = _interopRequireDefault(require("classnames"));

var _hooks = require("preact/hooks");

var Colors = _interopRequireWildcard({
  "primaryTheme": "$primary-theme-color",
  "secondaryTheme": "$secondary-theme-color"
});

var styles = _interopRequireWildcard({
  "DrawerContainer": "_2Ib4hcvtNCP8ZspGxhWpNO",
  "DrawerBg": "_1bRyYc7p_jCfAQEFnTKx4N",
  "displayBg": "fNguKKXi7q3Y_3XLSG7d1",
  "Drawer": "dBo2hpgtGe6pvrhgOhdAR",
  "animateOpen": "_1IRLRy0medQR25oXirvROe",
  "DrawerClose": "N7qspBqEeHnf1aGcA2vhT"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = (_ref) => {
  var {
    className,
    children,
    onClose
  } = _ref;
  var [shouldOpen, setShouldOpen] = (0, _hooks.useState)(false);

  var onCloseDrawer = () => {
    setShouldOpen(false);
    setTimeout(() => onClose(), 510);
  };

  (0, _hooks.useEffect)(() => {
    setShouldOpen(true);
  }, []);
  return (0, _preact.h)("div", {
    className: styles.DrawerContainer
  }, (0, _preact.h)("div", {
    className: (0, _classnames.default)(styles.DrawerBg, {
      [styles.displayBg]: shouldOpen
    }),
    onClick: onCloseDrawer
  }), (0, _preact.h)("aside", {
    className: (0, _classnames.default)(styles.Drawer, className, {
      [styles.animateOpen]: shouldOpen
    })
  }, (0, _preact.h)("button", {
    className: styles.DrawerClose,
    onClick: onCloseDrawer,
    type: "button",
    ariaLabel: "Close"
  }, (0, _preact.h)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, (0, _preact.h)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0, _preact.h)("path", {
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    fill: Colors.primaryTheme
  }))), children));
};

var _default = Drawer;
exports.default = _default;