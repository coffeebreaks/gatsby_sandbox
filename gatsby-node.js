require("dotenv").config({
    path: `.env.development`,
  })
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPage(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then((result) => {
    //highlight-start
    result.data.allWpPage.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    //highlight-end
  })
}