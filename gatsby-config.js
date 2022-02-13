module.exports = {
    pathPrefix: "/Personal-Website",
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-provide-react',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/images/`,
            },
        },

    ]
    
}