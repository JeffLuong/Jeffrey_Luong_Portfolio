"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _analytics = require("../lib/analytics");

var _hooks = require("preact/hooks");

var usePageViewTracker = () => {
  var gaRef = (0, _hooks.useRef)();
  (0, _hooks.useEffect)(() => {
    if (global.window) {
      gaRef.current = _analytics.GoogleAnalyticsTracker.getInstance();
    }
  }, []);
  return path => {
    gaRef.current.trackPageView(path);
  };
};

var _default = usePageViewTracker;
exports.default = _default;