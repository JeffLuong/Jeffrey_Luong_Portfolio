export default function(meta, content) {
  const { title, canonicalUrl } = meta;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#0574bc">
        <title>${title}</title>
        <link rel="preload" as="style" type="text/css" href="/static/build/main.css">
        <link rel="preload" as="script" type="text/javascript" href="/static/build/app.js">
        <link rel="preconnect" crossorigin href="https://www.google-analytics.com">
        <link rel="canonical" href=${canonicalUrl}>
        <link rel="icon" href="/static/img/favicon.png">
        <link rel="stylesheet" type="text/css" href="/static/build/main.css">
        <link rel="manifset" href="/static/manifest.json">
        <!-- Google Analytics -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-68853336-1', 'auto');
        </script>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="/static/build/app.js" defer></script>
      </body>
    </html>`
}