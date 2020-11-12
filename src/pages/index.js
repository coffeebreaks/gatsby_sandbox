import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  //highlight-line
  return (
    <Layout>
      <SEO title="home" />
      {/* highlight-start */}
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPage.nodes.map((node) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      {/* highlight-end */}
    </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPage(sort: { fields: [date] }) {
      nodes {
        title
        slug
      }
    }
  }
`
//highlight-end