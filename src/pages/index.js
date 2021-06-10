import * as React from "react"
import {
  Hero,
  Layout,
  Seo,
  About,
  GridRooms,
  Reviews,
  Contact,
  Info,
} from "../components"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    rooms: { edges: rooms },
    reviews: { nodes: reviews },
  } = data
  console.log(reviews)
  return (
    <Layout>
      <Seo
        title="Home Page"
        description="SoundBoss is a professional recording studio located in Atlanta Georgia and is home to many major artist and hits heard today"
      />
      <Hero />
      <About />
      <GridRooms rooms={rooms} title="Hottest Rooms" />
      <Reviews reviews={reviews} />
      <Contact />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    rooms: allContentfulRooms(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          type
          id
          image {
            gatsbyImageData
          }
        }
      }
    }
    reviews: allContentfulReviews {
      nodes {
        id
        title
        name
        quote {
          quote
        }
        image {
          gatsbyImageData(height: 150, width: 150, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default IndexPage
