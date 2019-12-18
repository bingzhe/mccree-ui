/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `React-UI`,
        description: `React components that implement Microsoft's Fluent Design System.`,
        author: `@chenyueban`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `React UI`,
                short_name: `React UI`,
                description: `React components that implement Microsoft's Fluent Design System.`,
                start_url: `/`,
                background_color: `#0078d4`,
                theme_color: `#0078d4`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs`,
                path: `${__dirname}/src/docs`
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#333`,
                showSpinner: false
            }
        },
        {
            resolve: "gatsby-plugin-webpack-bundle-analyzer",
            options: {
                analyzerPort: 3000,
                production: true,
                disable: true
            }
        },
        `gatsby-plugin-sass`
    ]
};
