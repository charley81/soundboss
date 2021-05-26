import * as React from "react"
import { Hero, Layout, Seo, About } from "../components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
