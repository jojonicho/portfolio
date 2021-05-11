const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("src/templates/post.jsx");
    const tagPosts = path.resolve("src/templates/tag.jsx");

    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 200)
                frontmatter {
                  path
                  title
                  tags
                  cover {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    }
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          return reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        const postsByTag = {};
        // create tags page
        posts.map(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.map((tag) => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }

              postsByTag[tag].push(node);
            });
          }
        });

        const tags = Object.keys(postsByTag);

        //create tags
        tags.map((tagName) => {
          const posts = postsByTag[tagName];

          createPage({
            path: `/tags/${tagName.toLowerCase()}`,
            component: tagPosts,
            context: {
              posts,
              tagName,
            },
          });
        });

        //create posts
        posts.map(({ node }, index) => {
          const path = node.frontmatter.path;
          const prev = index === 0 ? null : posts[index - 1].node;
          const next =
            index === posts.length - 1 ? null : posts[index + 1].node;
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
              prev,
              next,
            },
          });
        });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
