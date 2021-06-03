import React, { useState, useEffect } from "react"
import { Title } from "../components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { css } from "@emotion/react"

const Reviews = ({ reviews = [] }) => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1
      if (index > reviews.length - 1) {
        index = 0
      }

      return index
    })
  }

  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1
      if (index < 0) {
        index = reviews.length - 1
      }

      return index
    })
  }

  console.log(index)

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > reviews.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section
      className="section"
      css={css`
        .section-content {
          width: 80vw;
          height: 450px;
          max-width: 800px;
          text-align: center;
          position: relative;
          display: flex;
          overflow: hidden;
        }

        .img {
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .prev,
        .next {
          position: absolute;
          top: 200px;
          transform: translateY(-50%);
          width: 1.25rem;
          height: 1.25rem;
          display: grid;
          place-items: center;
          border-color: transparent;
          font-size: 1rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .prev {
          left: 0;
        }

        .next {
          right: 0;
        }

        article {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: var(--transition);
        }

        article.activeSlide {
          opacity: 1;
          transform: translateX(0);
        }

        article.lastSlide {
          transform: translateX(-100%);
        }

        article.nextSlide {
          transform: translateX(100%);
        }
      `}
    >
      <Title title="reviews" />
      <p>
        From Some Of Your Favorites At <span className="name">SoundBoss</span>{" "}
        Studios...
      </p>

      <div className="section-content">
        {reviews.map((review, reviewIndex) => {
          const {
            data: { image, title, quote, name },
          } = review

          const quoteImage = getImage(image.localFiles[0])

          let position = "nextSlide"
          if (reviewIndex === index) {
            position = "activeSlide"
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === reviews.length - 1)
          ) {
            position = "lastSlide"
          }

          return (
            <article className={position} key={reviewIndex}>
              <GatsbyImage
                image={quoteImage}
                alt={name}
                className="img"
              ></GatsbyImage>
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
            </article>
          )
        })}
        <button className="prev" onClick={prevSlide}>
          <AiOutlineLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <AiOutlineRight />
        </button>
      </div>
    </section>
  )
}

export default Reviews
