"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _analytics = require("../lib/analytics");

var _hooks = require("preact/hooks");

var useAnalytics = () => {
  var gaRef = (0, _hooks.useRef)();
  (0, _hooks.useEffect)(() => {
    if (global.window) {
      gaRef.current = _analytics.GoogleAnalyticsTracker.getInstance();
    }
  }, []);
  return {
    trackPageView: path => {
      gaRef.current.trackPageView(path);
    },
    trackClick: params => {
      gaRef.current.trackClick(params);
    }
  };
};

var _default = useAnalytics;
exports.default = _default;