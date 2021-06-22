// noinspection NpmUsedModulesInstalled
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "SanchitB23",
    siteUrl: 'https://sanchitb23.github.io',
    description:
        'Sanchit Bhatnagar is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@sanchitb23',
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-199966249-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Sanchit Bhatnagar',
        short_name: 'SanchitB23',
        start_url: '/',
        /*background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,*/
        icon: "src/resources/images/icon.png",
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
  ],
};
