"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lightning;

var _preact = require("preact");

function Lightning() {
  return (0, _preact.h)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, (0, _preact.h)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0, _preact.h)("path", {
    d: "M7 2v11h3v9l7-12h-4l4-8z",
    fill: "#00a3ff"
  }));
}