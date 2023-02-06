/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Design Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/portfolio",
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `crw7rb96lc2r`,
        accessToken: `qPpvXn0FlsTxIEQnOapKw7Idy572Oa_dag8igb_SB-8`,
      },
    },
  ],
};
