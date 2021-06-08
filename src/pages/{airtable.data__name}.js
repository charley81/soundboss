import React from "react"
import { graphql } from "gatsby"

const RoomInfoTemplate = ({ data }) => {
  console.log(data)
  return <div>room info template</div>
}

export const query = graphql`
  query GetRoomInfo($recordId: String) {
    airtable(recordId: { eq: $recordId }, table: { eq: "Rooms" }) {
      data {
        name
        equipment
        type
        price
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
      id
      recordId
    }
  }
`

export default RoomInfoTemplate
