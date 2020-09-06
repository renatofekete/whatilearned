/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "What I Learned",
    author: "Renato Fekete",
    description: "Blog about Gatsby/Frontend stuff",
    image: `/images/Logo-WIL.png`,
    url: `https://whatilearned.tech`,
    social: {
      twitter: "https://twitter.com/renato_fekete",
      linkedin: "https://www.linkedin.com/in/renato-fekete/",
    },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "helper.scss";`,
        includePaths: ["src/styles"],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["poppins:400,700", "material icons"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
