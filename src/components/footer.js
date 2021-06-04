import React from "react"
import { css } from "@emotion/react"

const Footer = () => {
  return (
    <footer
      css={css`
        background: var(--color-dark);
        color: var(--color-light);
        padding: 2rem;
        text-align: center;

        a {
          color: var(--color-light);
          cursor: pointer;
        }

        .content {
          max-width: var(--max-width);
          margin: 0 auto;
        }

        @media screen and (min-width: 768px) {
          .content {
            display: flex;
            justify-content: space-between;
          }
        }
      `}
    >
      <div className="content">
        <p>&copy; SoundBoss {new Date().getFullYear()}</p>
        <p>
          Designed & Developed: <a href="https://www.thegreatdevco.com">TGDC</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
