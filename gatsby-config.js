/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-netlify-cms', 'gatsby-transformer-remark', 
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `companies`,
      path: `${__dirname}/content/company/`,
    },
  }],
}
