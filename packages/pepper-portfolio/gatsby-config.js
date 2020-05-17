const path = require(`path`)

module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `/src/pages`),
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
});

// const path = require(`path`);

// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-plugin-mdx`,
//       options: {},
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `pages`,
//         path: path.join(__dirname, `src/pages`),
//       },
//     },
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-typescript`,
//     `gatsby-plugin-emotion`,
//     `gatsby-plugin-theme-ui`,
//   ],
// };
