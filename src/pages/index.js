import * as React from "react"
import { Hero, Layout, Seo, About, GridRooms, Survey } from "../components"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    allAirtable: { nodes: rooms },
  } = data

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <GridRooms rooms={rooms} title="Hottest Rooms" />
      <Survey />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Rooms" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
