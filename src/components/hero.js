import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Hero = () => {
  return (
    <section
      css={css`
        height: 100vh;
        position: relative;
        margin-top: -5rem;

        .hero-img {
          display: block;
          height: 100%;
          background-position: bottom;
          position: relative;
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 9)),
            to(rgba(0, 0, 0, 0))
          );
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 9),
            rgba(0, 0, 0, 0)
          );
        }

        .hero-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
        }

        article {
          text-align: center;
          width: 85vw;
          max-width: var(--fixed-width);
        }

        h1 {
          margin: 2rem 0;
        }
      `}
    >
      {/* hero image */}
      <StaticImage
        src="../images/showcase.jpg"
        alt="row of guitars"
        layout="fullWidth"
        placeholder="tracedSVG"
        className="hero-img"
      />

      {/* hero content */}
      <div className="hero-content">
        <article>
          <p className="tagline">you dream it! we create it!</p>
          <h1>we make dreams make millions</h1>
          <AnchorLink to="/#rooms" className="btn">
            room info
          </AnchorLink>
        </article>
      </div>
    </section>
  )
}

export default Hero
