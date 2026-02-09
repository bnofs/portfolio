const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query ProjectList {
      allContentfulProject {
        nodes {
          title
          content {
            content
          }
        }
      }
    }
  `);

  data.allContentfulProject.nodes.forEach((node) => {
    actions.createPage({
      path: "/projects/" + node.title.toLowerCase().replace(/\s/g, "-") + "/",
      component: path.resolve("./src/pages/project-details.js"),
      context: { name: node.title },
    });
  });
};
