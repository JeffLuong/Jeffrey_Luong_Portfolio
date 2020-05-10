"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(meta, content) {
  var {
    title,
    description,
    canonicalUrl
  } = meta;
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <meta name=\"theme-color\" content=\"#0574bc\">\n        <meta name=\"description\" content=\"".concat(description, "\">\n        <title>").concat(title, "</title>\n        <link rel=\"preload\" as=\"style\" type=\"text/css\" href=\"/static/build/main.css\">\n        <link rel=\"preload\" as=\"script\" type=\"text/javascript\" href=\"/static/build/app.js\">\n        <link rel=\"preconnect\" crossorigin href=\"https://www.google-analytics.com\">\n        <link rel=\"canonical\" href=").concat(canonicalUrl, ">\n        <link rel=\"icon\" href=\"/static/img/favicon.png\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/static/build/main.css\">\n        <link rel=\"manifset\" href=\"/static/manifest.json\">\n        <!-- Google Analytics -->\n        <script>\n          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n          ga('create', 'UA-68853336-1', 'auto');\n        </script>\n      </head>\n      <body>\n        <div id=\"app\">").concat(content, "</div>\n        <script src=\"/static/build/app.js\" defer></script>\n      </body>\n    </html>");
}