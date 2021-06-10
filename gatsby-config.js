require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SoundBoss Studios`,
    description: `SoundBoss Studios, Recording Studio, Analog Recording, Professional Mixing, Professional Mastering, Recording Studio Atlanta, Atlanta Recording Studio`,
    author: `Chris Harley @ The Great Dev Co.`,
    titleTemplate: `%s | Gatsby - Airtable`,
    url: `https://soundbossstudios.netlify.app/`,
    image: `showcase.jpg`,
    twitterUsername: `@chrisharley81`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -200,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-RYE3HEW2HD`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "SoundBoss",
        short_name: "SoundBoss",
        start_url: "https://soundbossstudios.netlify.app/",
        background_color: "#3634c8",
        theme_color: "#3634c8",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
