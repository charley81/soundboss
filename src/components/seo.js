import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const siteDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: siteDescription,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
