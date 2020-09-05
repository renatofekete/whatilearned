import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => {
  return (
    <Layout>
      <Seo />
      <main className="container-padding">
        <div className="container no-aside">
          <section className="spacing">
            <h1>Welcome to What I Learned</h1>
            <p>
              A blog dedicated mostly for experimenting with the JAMstack and
              Frontend development.
            </p>
            <p>
              So if you want to read about joy and frustration from learning and
              trying new tech stuff, you are in the right place.
            </p>
            {
              // HERE I SHOULD PRINT TAGS
            }
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default Home
