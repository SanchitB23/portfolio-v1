// noinspection NpmUsedModulesInstalled
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "Sanchit Bhatnagar",
    titleTemplate: `%s | SanchitB23`,
    siteUrl: 'https://sanchitb23.netlify.app',
    description:
        'Sanchit Bhatnagar is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    image: '/preview.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@sanchit1249',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Sanchit Bhatnagar',
        short_name: 'SanchitB23',
        start_url: '/',
        background_color: "#0a192f",
        theme_color: "#FCA311",
        icon: "src/resources/icons/Logo-outline.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/resources/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s3ihk2ts57lt`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  ],
}
;
