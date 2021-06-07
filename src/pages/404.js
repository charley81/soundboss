import * as React from "react"
import { Layout, Seo } from "../components"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section
      className="section"
      css={css`
        text-align: center;
        margin-top: 10vh;

        .btn {
          margin-top: 2rem;
        }
      `}
    >
      {" "}
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="btn">
        back home
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
