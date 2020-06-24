"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAnalyticsTracker = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GoogleAnalyticsTracker {
  constructor(ga) {
    _defineProperty(this, "__ga", null);

    _defineProperty(this, "isProduction", false);

    this.__ga = ga || global.ga;
    this.isProduction = process.env.NODE_ENV === 'production';
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
      if (this.isProduction) {
        __ga('set', 'page', path);

        __ga('send', 'pageview');
      } else {
        console.log("Tracking pageview ::: ".concat(path));
      }
    }
  }

  trackClick(params) {
    var {
      __ga
    } = this;

    if (__ga) {
      if (this.isProduction) {
        __ga('send', _objectSpread({}, params));
      } else {
        var {
          hitType: t,
          eventCategory: c,
          eventAction: a,
          eventLabel: l
        } = params;
        console.log("Tracking click ::: type: \"".concat(t, "\" ::: category: \"").concat(c, "\" ::: action: \"").concat(a, "\" ::: label: \"").concat(l, "\""));
      }
    }
  }

}

exports.GoogleAnalyticsTracker = GoogleAnalyticsTracker;

_defineProperty(GoogleAnalyticsTracker, "__instance", null);