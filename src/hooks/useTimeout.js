import { useEffect, useRef } from 'preact/hooks';

const useTimeout = (callback, delay, deps = []) => {
  const savedCallback = useRef({});

  useEffect(() => {
    savedCallback.current = { callback };
  }, [callback]);

  useEffect(() => {
    function func() {
      savedCallback.current.callback();
    }

    const id = setTimeout(func, delay);
    return () => clearTimeout(id);
  }, [delay, ...deps]);
}

export default useTimeout;