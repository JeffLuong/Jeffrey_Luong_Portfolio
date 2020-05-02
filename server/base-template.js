export default function(meta, content) {
  const { title, canonicalUrl } = meta;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content"#0077FF">
        <title>${title}</title>
        <link rel="preload" as="style" type="text/css" href="/static/build/main.css">
        <link rel="preload" as="script" type="text/javascript" href="/static/build/main.js">
        <link rel="canonical" href=${canonicalUrl}>
        <link rel="icon" href="/static/img/favicon.png">
        <link rel="stylesheet" type="text/css" href="/static/build/main.css">
        <link rel="manifset" href="/static/manifest.json">
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="/static/build/main.js" defer></script>
      </body>
    </html>`
}