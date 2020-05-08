"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hooks = require("preact/hooks");

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
var useCachedHandlers = function useCachedHandlers(callback) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var memoizedCb = (0, _hooks.useCallback)(callback, [...deps]);
  var handlers = (0, _hooks.useRef)({});

  var getHandlers = key => {
    if (handlers.current[key]) {
      return handlers.current[key];
    }

    handlers.current[key] = function () {
      return memoizedCb(...arguments);
    };

    return handlers.current[key];
  };

  return [getHandlers, handlers.current];
};

var _default = useCachedHandlers;
exports.default = _default;