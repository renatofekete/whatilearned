import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          social {
            twitter
          }
        }
      }
    }
  `)
  const seoData = {
    title: "About",
  }
  return (
    <Layout>
      <Seo seoData={seoData} />
      <div className="container spacing container-padding">
        <h1>Welcome to {data.site.siteMetadata.title}</h1>
        <p>
          Hi, my name is Renato, I am a web developer from Croatia, and this is
          a blog created as a side project meant for learning and experimenting
          with, primarily, Gatsby.js and Front-end development in general. if
          you want to learn more, you can reach me on{" "}
          <a
            href={data.site.siteMetadata.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter <span className="material-icons">launch</span>
          </a>{" "}
        </p>
        <h2>Why</h2>
        <p>
          After attending{" "}
          <a
            href="https://jamstackconf.com/virtual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamstack Conf Virtual <span className="material-icons">launch</span>
          </a>{" "}
          and{" "}
          <a
            href="https://codelandconf.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeland Distributed <span className="material-icons">launch</span>
          </a>
          , where I got my free .tech domain, I was wondering what can I do with
          it, should I let it expire? Of course, that was out of the question,
          so I decided to create a project that will grow and evolve as I learn
          more about it.
        </p>
        <h2>What do I hope to get out of this blog</h2>
        <ol>
          <li>Create a blogging habit</li>
          <li>Get into JAMstack community</li>
          <li>Hopefully, someone else will find it useful</li>
          <li>Getting involved in more "professional" JAMstack projects</li>
          <li>Generally, create more amazing stuff</li>
        </ol>
        <h2>How</h2>
        <p>
          By creating a blog post about new things that I learn, and sharing
          them on{" "}
          <a
            href={data.site.siteMetadata.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter <span className="material-icons">launch</span>
          </a>{" "}
          and some other blogging platforms, and by getting involved with open
          source projects
        </p>
      </div>
    </Layout>
  )
}

export default About
