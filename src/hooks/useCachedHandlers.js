import { useRef, useCallback } from 'preact/hooks';

/**
 * A hook that caches a list of children's actions. Useful for when list items should not
 * change but may be subjected to unecessary re-renders because the list's parent is re-rendered.
 *
 * In short, this hook can avoid redefining functions - which as a result, re-renders the list items
 * (even though they don't need to).
 *
 * NOTE: Do NOT use this hook if your list items SHOULD be re-rendered as a side-effect of updated parent state!
 *
 * Example usage:
 * const [getHandlers] = useCachedHandlers((event) => {
 *   // handle click/hover/etc. event
 * }, [...hookDependencies]);
 *
 * return (
 *   <ul>
 *     {list.map(item => (
 *       <ChildComponent onClick={getHandlers(item.value)}>{item.label}</ChildComponent>
 *     ))}
 *   </ul>
 * );
 *
 * @param {Function} callback
 * @param {Array<*>} dependencies
 * @return {Function[]} the function to get the item's function handler
 */

const useCachedHandlers = (callback, deps = []) => {
  const memoizedCb = useCallback(callback, [...deps]);
  const handlers = useRef({});

  const getHandlers = key => {
    if (handlers.current[key]) {
      return handlers.current[key];
    }

    handlers.current[key] = (...args) => memoizedCb(...args);
    return handlers.current[key];
  };

  return [getHandlers, handlers.current];
};

export default useCachedHandlers;