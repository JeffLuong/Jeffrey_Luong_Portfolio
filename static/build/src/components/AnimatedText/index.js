"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _classnames = _interopRequireDefault(require("classnames"));

var styles = _interopRequireWildcard({
  "AnimatedText": "_180Lyu9RK8iAb7LI-sov51",
  "Letter": "_2ilK0cqBoobplZWkT6NEka",
  "fadeUp": "_2js5biEZykbjMC_P2v7Jpk",
  "slideIn": "_1Z3BdJapmD55KbeR_yDQpR",
  "useFadeUp": "_23tLkE_WcGuSF8tktIisDA",
  "isAnimated": "_1WPCwNiAKHNV_Z9CqL496x",
  "useSlideIn": "CumE7tTyFinPL_Noe6zmL"
});

var _useTimeout = _interopRequireDefault(require("../../hooks/useTimeout"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Letter = (_ref) => {
  var {
    children,
    delay,
    className
  } = _ref;
  var [isAnimated, setIsAnimated] = (0, _hooks.useState)(false);
  (0, _useTimeout.default)(() => {
    setIsAnimated(true);
  }, delay);
  return (0, _preact.h)("span", {
    className: (0, _classnames.default)(styles.Letter, className, {
      [styles.isAnimated]: isAnimated
    }),
    style: isAnimated ? {} : {
      transform: 'translateY(100%)',
      opacity: 0
    }
  }, children);
};

var AnimatedText = (_ref2) => {
  var {
    TagName,
    children,
    animationType,
    className,
    delay: animationDelay
  } = _ref2;
  var useSlideIn = animationType === 'slide-in';
  var animationClass = useSlideIn ? styles.useSlideIn : styles.useFadeUp;
  var letters = children.split('');
  var start = 0;
  return (0, _preact.h)(TagName, {
    className: (0, _classnames.default)(styles.AnimatedText, className)
  }, letters.map((letter, i) => {
    var delay = useSlideIn ? "".concat((letters.length - start) * 50 + animationDelay) : "".concat((i + start) * 25 + animationDelay);

    if (/^[\s]/.test(letter)) {
      return (0, _preact.h)("span", null, "\xA0");
    }

    start++;
    return (0, _preact.h)(Letter, {
      className: animationClass,
      delay: delay
    }, letter);
  }));
};

var _default = AnimatedText;
exports.default = _default;