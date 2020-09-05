import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyle from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
          social {
            linkedin
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer>
      <div className={`container ${footerStyle.footerInner}`}>
        <p>
          Created by:{" "}
          <a
            href={data.site.siteMetadata.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.author}{" "}
            <span className="material-icons">launch</span>
          </a>{" "}
          with 💗
        </p>
      </div>
    </footer>
  )
}

export default Footer
