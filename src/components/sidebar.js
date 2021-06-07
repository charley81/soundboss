import React, { useContext } from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import { AiFillCloseCircle } from "react-icons/ai"

const Sidebar = () => {
  const { links, hideSidebar } = useContext(GatsbyContext)

  return (
    <aside
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);

        @media screen and (min-width: 800px) {
          display: none;
        }

        .container {
          background: var(--color-light);
          color: var(--color-dark);
          width: 90vw;
          height: 90vh;
          border-radius: var(--border-radius);
          position: relative;
          padding: 4rem 2rem 2rem;
        }

        button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: transparent;
          border: transparent;
          font-size: 2rem;
          cursor: pointer;
          color: var(--color-primary);
        }

        .links {
          display: grid;
          gap: 1rem 2rem;
          grid-gap: 0.75rem;
          align-items: center;
          text-transform: capitalize;
          font-size: 1.2rem;

          @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        a {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.75rem;
          grid-gap: 0.75rem;
          align-items: center;
          color: var(--color-dark);
          transition: var(--transition);

          &:hover {
            color: var(--color-primary);
          }

          svg {
            color: var(--color-primary);
            font-size: 1.5rem;
          }
        }
      `}
    >
      <div className="container">
        <button onClick={hideSidebar}>
          <AiFillCloseCircle className="icon" />
        </button>
        <div className="links">
          {links.map((link, index) => {
            const { url, label, icon } = link
            return (
              <Link to={url} key={index} onClick={hideSidebar}>
                {icon}
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
