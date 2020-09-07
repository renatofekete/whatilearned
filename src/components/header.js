import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import headerStyle from "./header.module.scss"
import Hamburger from "./hamburger"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyle.headerOuter}>
      <div className={`container ${headerStyle.headerInner}`}>
        <p className={headerStyle.logo}>
          {" "}
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </p>
        <Hamburger />
      </div>
    </header>
  )
}

export default Header
