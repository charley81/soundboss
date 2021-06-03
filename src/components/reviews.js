import React, { useState } from "react"
import { Title } from "../components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Reviews = ({ reviews = [] }) => {
  const [index, setIndex] = useState(0)
  return (
    <section className="section">
      <Title title="reviews" />
      <p>
        From Some Of Your Favorites At <span className="name">SoundBoss</span>{" "}
        Studios...
      </p>

      <div className="section-content">
        {reviews.map(review => {
          const {
            id,
            data: { image, title, quote, name },
          } = review

          const quoteImage = getImage(image.localFiles[0])

          return (
            <article key={id}>
              <GatsbyImage image={quoteImage} alt={name}></GatsbyImage>
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
            </article>
          )
        })}
        <button className="prev">
          <AiOutlineLeft />
        </button>
        <button className="next">
          <AiOutlineLeft />
        </button>
      </div>
    </section>
  )
}

export default Reviews
