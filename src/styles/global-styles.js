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
  :root {
    --color-primary: #3634c8;
    --color-dark: #000000;
    --color-light: #ffffff;
    --color-mid: #f6f6f6f6;
    --transition: all 0.2s ease;
    --border-radius: 3px;
    --letter-spacing: 5px;
    --font-family: "Bellota Text";
    --max-width: 1150px;
    --fixed-width: 650px;
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    line-height: 2;
    letter-spacing: var(--letter-spacing);
    background: var(--colo-mid);
    color: var(--color-dark);
    font-size: 0.875rem;
  }

  ul,
  li {
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.25;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  a {
    font-weight: 400;
    text-decoration: none;
  }

  p {
    font-weight: 300;
  }

  img {
    width: 100%;
    display: block;
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  /*  global classes */

  .btn {
    display: block;
    text-align: center;
    width: 75%;
    text-transform: uppercase;
    background: var(--color-primary);
    color: var(--color-light);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 1px solid transparent;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
  }
  .btn:hover {
    background: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }

  .section {
    padding: 5rem 0;
    position: relative;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .name {
    color: var(--color-primary);
  }

  .section-content {
    margin-top: 4rem;
  }

  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
`

export default globalStyles
