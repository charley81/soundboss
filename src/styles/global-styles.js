import "@fontsource/bellota-text" // Defaults to weight 400.
import "@fontsource/bellota-text/300.css"
import "@fontsource/bellota-text/700.css"
import { css } from "@emotion/react"

/*
Supported variables:

Weights: [300,400,700]
Styles: [italic,normal]
Supported subsets: [cyrillic,latin,latin-ext,vietnamese]
*/

const globalStyles = css`
  body {
    font-family: "Bellota Text";
    line-height: 2;
    letter-spacing: 2px;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
  }

  p {
    font-weight: 300;
  }
`

export default globalStyles
