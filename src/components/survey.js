import React, { useState, useEffect, useLayoutEffect } from "react"
import { Title } from "../components"
import base from "./airtable"
import { AiFillCheckCircle } from "react-icons/ai"
import { css } from "@emotion/react"

const Survey = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  // get initial votes on page load
  const getResults = async () => {
    const results = await base("Survey")
      .select({})
      .firstPage()
      .catch(err => console.error(err))
    const newItems = results.map(result => {
      const { id, fields } = result
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  useEffect(() => {
    getResults()
  }, [])

  // update airtable on click
  const handleVote = async id => {
    setLoading(true)
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, votes: fields.votes + 1 }
        return { id, fields }
      } else {
        return item
      }
    })
    const records = await base("Survey")
      .update(tempItems)
      .catch(err => console.error(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  return (
    <section
      className="section"
      css={css`
        .loading {
          margin: 4rem 0;
        }

        button {
          background: transparent;
          border: transparent;
        }

        button:disabled {
          .icon {
            color: grey;
            cursor: not-allowed;
          }
        }

        .section-content {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: var(--box-shadow);
          padding: 1rem;
          border-radius: var(--border-radius);
          transition: var(--transition);

          &:hover {
            transform: scale(1.01);
          }
        }

        .room-logo {
          display: inline-block;
          text-align: center;
          color: var(--color-light);
          background: var(--color-primary);
          padding: 0.5rem;
          border-radius: var(--border-radius);
        }

        .icon {
          color: var(--color-green);
          font-size: 1.5rem;
          cursor: pointer;
        }

        .green {
          color: var(--color-green);
        }
      `}
    >
      <Title title="survey" />
      <p>
        Which Is Your Favorite Room At <span className="name">SoundBoss</span>
        studios,
      </p>
      <p>
        Click The <span className="green">Green</span> check to vote...
      </p>

      {/* click a "room card" to vote on your favorite studio room */}

      <div className="section-content">
        {items.map(item => {
          const {
            id,
            fields: { name, votes },
          } = item
          return (
            <article key={id}>
              <div className="room-logo">
                <p>studio</p>
                <h4>{name.toUpperCase().substring(0, 1)}</h4>
              </div>
              <p>Votes: {votes}</p>
              <button disabled={loading ? true : false}>
                <AiFillCheckCircle
                  className="icon"
                  onClick={() => handleVote(id)}
                />
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Survey
