import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)
  const seoData = {
    title: "Blog",
  }
  return (
    <Layout>
      <Seo seoData={seoData} />
      <main className={`container container-padding spacing`}>
        <h1>Blog</h1>
        <ul className="blog-list">
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export default Blog
