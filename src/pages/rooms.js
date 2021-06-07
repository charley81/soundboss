import React from "react"
import { graphql } from "gatsby"
import { Layout, Rooms } from "../components"
import { css } from "@emotion/react"

const RoomsPage = ({ data }) => {
  const {
    allAirtable: { nodes: rooms },
  } = data
  return (
    <Layout>
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
        data {
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          name
          type
        }
        id
      }
    }
  }
`

export default RoomsPage
