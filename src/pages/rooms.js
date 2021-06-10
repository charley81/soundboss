import React from "react"
import { graphql } from "gatsby"
import { Layout, Rooms, Seo } from "../components"
import { css } from "@emotion/react"

const RoomsPage = ({ data }) => {
  const {
    allAirtable: { nodes: rooms },
  } = data
  return (
    <Layout>
      <Seo
        title="SoundBoss Studio Rooms"
        description="View studio rooms at SoundBoss studios for information about the studio room and equipment"
      />
      <Rooms title="our rooms" rooms={rooms} page />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Rooms" } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        recordId
        data {
          date
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

export default RoomsPage
