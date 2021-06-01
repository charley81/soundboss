import * as React from "react"
import { Hero, Layout, Seo, About, GridRooms } from "../components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <GridRooms title="Hottest Rooms" />
  </Layout>
)

export default IndexPage
