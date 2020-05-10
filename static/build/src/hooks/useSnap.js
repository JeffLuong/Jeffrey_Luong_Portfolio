"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hooks = require("preact/hooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setupSvg = snapRef => {
  var {
    Snap,
    mina
  } = window; // Mina is defined during Snap initialization

  if (Snap) {
    var svg = Snap(snapRef.current);
    svg.node.removeChild(svg.select('desc').node);
    return {
      Snap,
      mina,
      svg
    };
  }
};
/**
 * Dynamically imports Snapsvg on the client side only since it relies on the browser's window API.
 * Also returns a setup function that can be used to wrap an SVG DOM element within the Snap object.
 */


var useSnap = () => {
  var {
    window
  } = global;
  var [{
    setupSvg: setup
  }, setImported] = (0, _hooks.useState)({});
  (0, _hooks.useEffect)(() => {
    function importSnap() {
      return _importSnap.apply(this, arguments);
    }

    function _importSnap() {
      _importSnap = _asyncToGenerator(function* () {
        var {
          Snap
        } = window;

        if (typeof Snap === 'undefined') {
          Snap = yield Promise.resolve().then(() => _interopRequireWildcard(require('snapsvg'))).then(snap => snap.default);
        }

        return new Promise(resolve => resolve(Snap));
      });
      return _importSnap.apply(this, arguments);
    }

    function loadSnap() {
      return _loadSnap.apply(this, arguments);
    }

    function _loadSnap() {
      _loadSnap = _asyncToGenerator(function* () {
        try {
          yield importSnap();
          setImported({
            setupSvg
          });
        } catch (err) {
          console.log(err);
        }
      });
      return _loadSnap.apply(this, arguments);
    }

    loadSnap();
  }, [window]);
  return [setup];
};

var _default = useSnap;
exports.default = _default;