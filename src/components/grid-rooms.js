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
        .section-content {
          display: grid;
          width: 90vw;
          max-width: var(--max-width);
          margin: 0 auto;
          gap: 1rem;
          /* safari workaround */
          grid-gap: 1rem;
          grid-template-rows: 300px 300px;
          grid-auto-rows: 300px;
        }

        .room-image {
          height: 100%;
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        article {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius);
          background: var(--color-dark);

          &:hover .room-image {
            opacity: 0.2;
          }

          &:hover .room-info {
            opacity: 1;
          }
        }

        .room-info {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--color-light);
          width: 100%;
          transition: var(--transition);
          text-align: center;
          opacity: 0;
        }

        .btn {
          margin-top: 4rem;

          &:hover {
            background: var(--color-light);
            border-color: transparent;
          }
        }
      `}
    >
      {/* title section */}
      <Title title={title || "Rooms"} />
      <p>
        Click A Image To View <span className="name">SoundBoss</span> room
        info...
      </p>

      {/* image and hover content */}
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

      {/* go to all rooms page */}
      <Link to="/" className="btn">
        All Rooms
      </Link>
    </section>
  )
}

export default GridRooms
