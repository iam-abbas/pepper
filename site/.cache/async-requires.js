// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-mdx": () => import("./../src/pages/index.mdx" /* webpackChunkName: "component---src-pages-index-mdx" */)
}

