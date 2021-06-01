import React from "react"
import { Title } from "../components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

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
        {rooms.map((room, index) => {
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
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default GridRooms
