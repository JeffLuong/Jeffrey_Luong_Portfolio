export class GoogleAnalyticsTracker {
  constructor(ga) {
    this.__ga = ga || global.ga;
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  static __instance = null;

  static defaultClickParams = {
    hitType: 'event',
    eventCategory: 'Videos',
    eventAction: 'click'
  };

  static createInstance(ga) {
    return GoogleAnalyticsTracker.__instance = new GoogleAnalyticsTracker(ga);
  }

  static getInstance() {
    return GoogleAnalyticsTracker.__instance || GoogleAnalyticsTracker.createInstance();
  }

  __ga = null;

  isProduction = false;

  trackPageView(path) {
    const { __ga } = this;
    if (__ga && this.isProduction) {
      __ga('set', 'page', path);
      __ga('send', 'pageview');
    }
  }

  trackClick(params) {
    const { __ga } = this;
    if (__ga && this.isProduction) {
      __ga('send', {
        ...GoogleAnalyticsTracker.defaultClickParams,
        ...params
      });
    }
  }
}
