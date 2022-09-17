/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (process.env.NODE_ENV !== "development" && page.path.match(/^\/mocks/)) {
    deletePage(page);
  }
};
