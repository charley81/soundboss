import React, { useContext } from "react"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import { css } from "@emotion/react"

const Navlink = ({ page }) => {
  const { links } = useContext(GatsbyContext)

  return (
    <li
      css={css`
        padding: 1rem 0;
        position: relative;

        &:hover .links {
          visibility: visible;
        }

        button {
          border: transparent;
          font-size: 1rem;
          letter-spacing: 2px;
          padding: 10px 20px;
          width: 100%;
          text-transform: capitalize;
          position: relative;
        }

        .links {
          position: absolute;
          top: 4rem;
          left: 50%;
          transform: translateX(-50%);
          visibility: hidden;
          padding: 2rem;
          box-shadow: var(--box-shadow);
          border-radius: var(--border-radius);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 2rem;
          grid-gap: 1rem 4rem;
          background: var(--color-light);
        }

        a {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.5rem;
          grid-gap: 0.5rem;
          align-items: center;
          text-transform: capitalize;
          cursor: pointer;
          color: var(--color-dark);
          transition: var(--transition);

          &:hover {
            color: var(--color-primary);
          }
        }

        .icon {
          color: red;
        }

        .caret {
          display: block;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid var(--color-primary);
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
      `}
    >
      <button>{page}</button>
      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link
          if (link.page === page) {
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            )
          }
        })}
        <div className="caret"></div>
      </div>
    </li>
  )
}

export default Navlink
