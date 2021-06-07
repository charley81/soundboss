import React, { useState } from "react"
import { Link } from "gatsby"
import { Title, SearchButtons } from "../components"
import { css } from "@emotion/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Rooms = ({ rooms: data = [], title, page }) => {
  const [rooms, setRooms] = useState(data)

  const setBackToAll = () => {
    setRooms(data)
  }

  return (
    <section
      className="section"
      css={css`
        .section-content {
          display: grid;
          gap: 1rem;
          grid-gap: 1rem;
        }

        .img {
          height: 100%;
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        article {
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .container {
          height: 15rem;
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius);
          background: var(--color-primary);
          cursor: pointer;

          &:hover .img {
            opacity: 0.2;
          }

          &:hover .info {
            opacity: 1;
          }
        }

        .info {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          opacity: 0;
          transition: var(--transition);
          color: var(--color-light);
          text-align: center;
        }

        h3 {
          margin: 1rem 0;
        }

        @media screen and (min-width: 768px) {
          .section-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (min-width: 992px) {
          .section-content {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}
    >
      <Title title={title || "rooms"} />
      {page && (
        <SearchButtons
          rooms={data}
          setRooms={rooms}
          setBackToAll={setBackToAll}
        />
      )}

      <div className="section-content">
        {rooms.map(room => {
          const { id } = room
          const { name, type, image } = room.data

          return (
            <article key={id}>
              <div className="container">
                <GatsbyImage
                  image={getImage(image.localFiles[0])}
                  alt={name}
                  className="img"
                />

                <div className="info">
                  <p>{type}</p>
                  <h3>{name}</h3>
                  <p className="click">Click For More Info</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      {!page && <Link to="/rooms">all projects</Link>}
    </section>
  )
}

export default Rooms
