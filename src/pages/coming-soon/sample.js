import React from "react"
import { Layout } from "../../components"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const SamplePage = () => {
  return (
    <Layout>
      <section
        className="section"
        css={css`
          text-align: center;
          margin-top: 10vh;

          p {
            margin-top: 1rem;
          }

          .btn {
            margin-top: 2rem;
          }
        `}
      >
        {" "}
        <h1>Coming Soon...</h1>
        <p>
          This page is reserved for future content coming soon to{" "}
          <span className="name">SoundBoss</span> studios.
        </p>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Layout>
  )
}

export default SamplePage
