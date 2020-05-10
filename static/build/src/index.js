"use strict";

var _preact = require("preact");

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = document.getElementById('app');
(0, _preact.render)((0, _preact.h)(_App.default, null), element, element.lastChild);