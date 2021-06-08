import React from "react"
import { graphql } from "gatsby"
import { Layout, Title } from "../components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const RoomInfoTemplate = ({ data }) => {
  const { id } = data.airtable
  const { name, equipment, type, price, image } = data.airtable.data
  return (
    <Layout>
      <section
        className="section"
        css={css`
          .img {
            height: 40vh;
            border-radius: var(--border-radius);
          }

          .info {
            display: flex;
            justify-content: space-between;

            h4 {
              color: var(--color-primary);
              font-size: 2rem;
              font-weight: 300;
            }
          }
        `}
      >
        {/* image */}
        <GatsbyImage
          image={getImage(image.localFiles[0])}
          alt={name}
          className="img"
        />

        <section className="section">
          {/* room info */}
          <div className="room-info">
            <div className="info">
              <Title title={name} />
              <h4>${price}/hr</h4>
            </div>
            <p className="tagline">
              call today to book a session in{" "}
              <span className="name">{name}</span>
            </p>
          </div>
          {/* equipment */}
          {/* contact component */}
          {/* info component */}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetRoomInfo($id: String) {
    airtable(id: { eq: $id }, table: { eq: "Rooms" }) {
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
    }
  }
`

export default RoomInfoTemplate
