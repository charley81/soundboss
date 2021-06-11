import React from "react"
import { graphql } from "gatsby"
import { Contact, Info, Layout, Rooms, Seo } from "../components"

const RoomsPage = ({ data }) => {
  const {
    allContentfulRooms: { nodes: rooms },
  } = data

  console.log(rooms)
  return (
    <Layout>
      <Seo
        title="SoundBoss Studio Rooms"
        description="View studio rooms at SoundBoss studios for information about the studio room and equipment"
      />
      <Rooms title="our rooms" rooms={rooms} page />
      <Contact />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRooms {
      nodes {
        id
        name
        type
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default RoomsPage
