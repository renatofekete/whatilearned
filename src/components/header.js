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
        <h4 className={headerStyle.logo}>
          {" "}
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h4>

        <Hamburger />
      </div>
    </header>
  )
}

export default Header
