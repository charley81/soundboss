import React, { useState } from "react"
import { css } from "@emotion/react"

const SearchButtons = ({ rooms, setRooms, setBackToAll }) => {
  const [index, setIndex] = useState(0)

  const types = [
    "all",
    ...new Set(
      rooms.map(room => {
        return room.data.type
      })
    ),
  ]

  const showRooms = (type, typeIndex) => {
    setIndex(typeIndex)
    if (type === "all") {
      setBackToAll()
    } else {
      const filteredRooms = rooms.filter(room => room.data.type === type)
      setRooms(filteredRooms)
    }
  }

  return (
    <div
      css={css`
        display: flex;
        margin: 2rem 0 0;
        justify-content: center;
        flex-wrap: wrap;

        button {
          text-transform: capitalize;
          background: transparent;
          border: transparent;
          letter-spacing: var(--letter-spacing);
          padding: 0.25rem;
          cursor: pointer;
          outline: none;
          transition: var(--transition);
          font-size: 1.1rem;
          margin: 0 1rem;

          &:hover {
            color: var(--color-primary);
          }
        }

        button.active {
          box-shadow: 0px 1.5px 0 var(--color-dark);
        }
      `}
    >
      {types.map((type, typeIndex) => {
        return (
          <button
            key={typeIndex}
            className={index === typeIndex ? "active" : undefined}
            onClick={() => showRooms(type, typeIndex)}
          >
            {type}
          </button>
        )
      })}
    </div>
  )
}

export default SearchButtons
