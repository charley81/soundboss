import React from "react"
import { Title } from "../components"
import { FaSoundcloud, FaTwitter, FaInstagram } from "react-icons/fa"
import { css } from "@emotion/react"

const Info = () => {
  return (
    <section
      className="section"
      css={css`
        .social-media {
          display: flex;
          justify-content: space-between;
          margin: 4rem auto 0;
        }

        .icon {
          font-size: 2rem;
          color: var(--color-primary);
        }

        @media screen and (min-width: 768px) {
          .section-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .company-info {
            text-transform: capitalize;
          }

          .social-media {
            width: 100%;
          }

          .icon {
            font-size: 4rem;
          }
        }
      `}
    >
      {/* title and tagline */}
      <Title title="company" />
      <p className="tagline">
        don't forget to follow <span className="name">@SoundBoss</span>{" "}
        Studios...
      </p>

      {/* company info and social media */}
      <div className="section-content">
        <ul className="company-info">
          <li>SoundBoss studios</li>
          <li>1921 peachtree st.</li>
          <li>Atlanta, GA 30303</li>
          <li>
            <a href="mailto: info@soundboss.com">info@soundboss.com</a>
          </li>
          <li>
            <a href="tel:1 (770) 113-0942">(770) 113-0942</a>
          </li>
        </ul>
        <div className="social-media">
          <a href="https://www.soundcloud.com" target="_blank" rel="noreferrer">
            <FaSoundcloud className="icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Info
