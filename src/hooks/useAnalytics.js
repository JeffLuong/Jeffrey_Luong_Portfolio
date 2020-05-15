import { GoogleAnalyticsTracker } from '../lib/analytics';
import { useEffect, useRef } from 'preact/hooks';

const useAnalytics = () => {
  const gaRef = useRef();

  useEffect(() => {
    if (global.window) {
      gaRef.current = GoogleAnalyticsTracker.getInstance();
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

export default useAnalytics;