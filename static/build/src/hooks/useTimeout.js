"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hooks = require("preact/hooks");

var useTimeout = function useTimeout(callback, delay) {
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var savedCallback = (0, _hooks.useRef)({});
  (0, _hooks.useEffect)(() => {
    savedCallback.current = {
      callback
    };
  }, [callback]);
  (0, _hooks.useEffect)(() => {
    function func() {
      savedCallback.current.callback();
    }

    var id = setTimeout(func, delay);
    return () => clearTimeout(id);
  }, [delay, ...deps]);
};

var _default = useTimeout;
exports.default = _default;