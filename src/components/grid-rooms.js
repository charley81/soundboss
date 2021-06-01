import React from "react"
import { Title } from "../components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const GridRooms = ({ rooms, title }) => {
  return (
    <section
      className="section"
      css={css`
        .room-image {
          border-radius: var(--border-radius);
        }
      `}
    >
      <Title title={title || "Rooms"} />
      <p>
        Click A Image To View <span className="name">SoundBoss</span> room
        info...
      </p>

      <div className="section-content">
        {rooms.map(room => {
          const { id } = room
          const { name, type } = room.data
          const image = room.data.image.localFiles[0]

          return (
            <article key={id}>
              <GatsbyImage
                image={getImage(image)}
                alt={name}
                className="room-image"
              />
              <div className="room-info">
                <p>{type}</p>
                <h3>{name}</h3>
                <Link to="/" className="btn">
                  Room Info
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default GridRooms
