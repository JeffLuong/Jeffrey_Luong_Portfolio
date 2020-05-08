"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(meta, content) {
  var {
    title,
    canonicalUrl
  } = meta;
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <meta name=\"theme-color\" content\"#0077FF\">\n        <title>".concat(title, "</title>\n        <link rel=\"preload\" as=\"style\" type=\"text/css\" href=\"/static/build/main.css\">\n        <link rel=\"preload\" as=\"script\" type=\"text/javascript\" href=\"/static/build/app.js\">\n        <link rel=\"canonical\" href=").concat(canonicalUrl, ">\n        <link rel=\"icon\" href=\"/static/img/favicon.png\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/static/build/main.css\">\n        <link rel=\"manifset\" href=\"/static/manifest.json\">\n      </head>\n      <body>\n        <div id=\"app\">").concat(content, "</div>\n        <script src=\"/static/build/app.js\" defer></script>\n      </body>\n    </html>");
}