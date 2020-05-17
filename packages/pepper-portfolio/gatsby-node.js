const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/template/pepper.js`),
  })
}