import { GoogleAnalyticsTracker } from '../lib/analytics';
import { useEffect, useRef } from 'preact/hooks';

const usePageViewTracker = () => {
  const gaRef = useRef();

  useEffect(() => {
    if (global.window) {
      gaRef.current = GoogleAnalyticsTracker.getInstance();
    }
  }, []);

  return path => {
    gaRef.current.trackPageView(path);
  };
};

export default usePageViewTracker;