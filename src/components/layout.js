import React from "react"

import Header from "./header"
import Footer from "./footer"

import layoutStyle from "./layout.module.scss"

const Layout = ({ children, props }) => {
  return (
    <div className={`${layoutStyle.container}`}>
      <div className={layoutStyle.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
