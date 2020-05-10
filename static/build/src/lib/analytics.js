"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAnalyticsTracker = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GoogleAnalyticsTracker {
  constructor(ga) {
    _defineProperty(this, "__ga", null);

    this.__ga = ga || global.ga;
  }

  static createInstance(ga) {
    return GoogleAnalyticsTracker.__instance = new GoogleAnalyticsTracker(ga);
  }

  static getInstance() {
    return GoogleAnalyticsTracker.__instance || GoogleAnalyticsTracker.createInstance();
  }

  trackPageView(path) {
    var {
      __ga
    } = this;

    if (__ga) {
      __ga('set', 'page', path);

      __ga('send', 'pageview');
    }
  }

}

exports.GoogleAnalyticsTracker = GoogleAnalyticsTracker;

_defineProperty(GoogleAnalyticsTracker, "__instance", null);