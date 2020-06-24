export class GoogleAnalyticsTracker {
  constructor(ga) {
    this.__ga = ga || global.ga;
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  static __instance = null;

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
    if (__ga) {
      if (this.isProduction) {
        __ga('set', 'page', path);
        __ga('send', 'pageview');
      } else {
        console.log(`Tracking pageview ::: ${path}`);
      }
    }
  }

  trackClick(params) {
    const { __ga } = this;
    if (__ga) {
      if (this.isProduction) {
        __ga('send', { ...params });
      } else {
        const { hitType: t, eventCategory: c, eventAction: a, eventLabel: l } = params;
        console.log(
          `Tracking click ::: type: "${t}" ::: category: "${c}" ::: action: "${a}" ::: label: "${l}"`
        );
      }
    }
  }
}
