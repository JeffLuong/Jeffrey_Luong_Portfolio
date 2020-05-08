export class GoogleAnalyticsTracker {
  constructor(ga) {
    this.__ga = ga || global.ga;
  }

  static __instance = null;

  static createInstance(ga) {
    return GoogleAnalyticsTracker.__instance = new GoogleAnalyticsTracker(ga);
  }

  static getInstance() {
    return GoogleAnalyticsTracker.__instance || GoogleAnalyticsTracker.createInstance();
  }

  __ga = null;

  trackPageView(path) {
    const { __ga } = this;
    if (__ga) {
      __ga('set', 'page', path);
      __ga('send', 'pageview');
    }
  }
}
