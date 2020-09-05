import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import Img from "gatsby-image"

import blogStyle from "./blog.module.scss"

import { graphql } from "gatsby"

export const data = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const seoData = {
    title: `${props.data.markdownRemark.frontmatter.title}`,
    description: `${props.data.markdownRemark.frontmatter.description}`,
    image: `${props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src}`,
  }
  /**
   * 
   *     <Img
          fluid={
            props.data.markdownRemark.frontmatter.featuredImage.childImageSharp
              .fluid
          }
          alt="y"
        />
   */
  return (
    <Layout>
      <Seo seoData={seoData} />
      <article className={`container container-padding spacing`}>
        <header>
          <h1 className={blogStyle.title}>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <p>
            <small>On: {props.data.markdownRemark.frontmatter.date}</small>
          </p>
        </header>

        <img
          src={
            props.data.markdownRemark.frontmatter.featuredImage.childImageSharp
              .fluid.src
          }
          alt=""
        />
        <div
          className={blogStyle.content}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </article>
    </Layout>
  )
}

export default Blog
