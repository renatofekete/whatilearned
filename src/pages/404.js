import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const NotFound = () => {
  const seoData = {
    title: "404 - not found",
    description: "The page you have been looking for is not found.",
  }
  return (
    <Layout>
      <Seo seoData={seoData} />
      <Helmet>
        <meta name="robots" content="noindex nofollow" />
      </Helmet>
      <div className="container">
        <h1>Oops! The page you have been looking for is not found.</h1>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
