import React, { useContext } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { GatsbyContext } from "../context/context"
import { Navlink } from "../components"

const Nav = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)

  const filteredLinks = [
    ...new Set(
      links.map(link => {
        return link.page
      })
    ),
  ]

  return (
    <nav
      css={css`
        position: relative;
        background: transparent;
        z-index: 1;
        height: 5rem;
        display: flex;
        align-items: center;

        .nav-center {
          width: 90vw;
          margin: 0 auto;
          max-width: var(--max-width);
        }

        .logo {
          color: var(--color-primary);
          font-weight: 700;
          font-size: 1.5rem;
        }

        .menu-icon {
          color: var(--color-primary);
          font-size: 1.25rem;
          transition: var(--transition);
          cursor: pointer;
          background: transparent;
          border: transparent;

          &:hover {
            transform: scale(1.25);
          }
        }

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-links {
          display: none;
        }

        @media screen and (min-width: 768px) {
          .menu-icon {
            display: none;
          }

          .nav-links {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            max-width: 500px;
          }

          .nav-center {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 0 2rem;
            align-items: center;
          }

          li {
            padding: 1rem 0;
            position: relative;
            font-weight: 300;
          }

          button {
            background: transparent;
            border: transparent;
            font-weight: 300;
            font-size: 1rem;
            position: relative;
            width: 100%;
            cursor: pointer;
            transition: var(--transition);

            &:hover {
              color: var(--color-primary);
            }
          }
        }
      `}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <p className="logo">SoundBoss</p>
          </Link>
          {!isSidebarOpen && (
            <button className="menu-icon" onClick={showSidebar}>
              <CgMenuGridO />
            </button>
          )}
        </div>
        <ul className="nav-links">
          {filteredLinks.map((page, index) => {
            return <Navlink key={index} page={page} />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
