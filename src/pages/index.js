import * as React from "react"
import {
  Hero,
  Layout,
  Seo,
  About,
  GridRooms,
  Survey,
  Reviews,
  Contact,
  Info,
} from "../components"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    rooms: { nodes: rooms },
    customers: { nodes: reviews },
  } = data

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <GridRooms rooms={rooms} title="Hottest Rooms" />
      <Survey />
      <Reviews reviews={reviews} />
      <Contact />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    rooms: allAirtable(
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
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        id
        data {
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  height: 150
                  width: 150
                  placeholder: TRACED_SVG
                  layout: FIXED
                )
              }
            }
          }
          quote
          title
        }
      }
    }
  }
`

export default IndexPage
