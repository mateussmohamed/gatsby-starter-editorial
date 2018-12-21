module.exports = {
  siteMetadata: {
    title: 'Gatsby Editorial Starter',
    description: 'Gatsby.js V2 starter template based on Editorial, designed by HTML5 UP.',
    author: '@mateussmohamed',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-editorial',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f56a6a',
        theme_color: '#f56a6a',
        display: 'minimal-ui',
        icon: 'src/assets/images/editorial-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
