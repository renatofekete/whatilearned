import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const Seo = ({ seoData }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(data)
  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    url,
  } = site.siteMetadata

  const seo = {
    title: seoData.title || defaultTitle,
    description: seoData.description || defaultDescription,
    url: `${url}${pathname}`,
    image: `${url}${seoData.image || defaultImage}`,
  }
  return (
    <Helmet title={seo.title}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <html lang="en" />
    </Helmet>
  )
}

export default Seo

const data = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
      }
    }
  }
`

Seo.defaultProps = {
  seoData: {
    title: null,
    description: null,
    image: null,
    url: null,
  },
}
