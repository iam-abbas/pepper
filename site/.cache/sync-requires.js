const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\Github\\pepper\\site\\.cache\\dev-404-page.js"))),
  "component---packages-pepper-portfolio-src-template-pepper-js": hot(preferDefault(require("E:\\Github\\pepper\\packages\\pepper-portfolio\\src\\template\\pepper.js"))),
  "component---src-pages-intro-mdx": hot(preferDefault(require("E:\\Github\\pepper\\site\\src\\pages\\intro.mdx")))
}

