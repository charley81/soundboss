import React, { useContext } from "react"
import globalStyles from "../styles/global-styles"
import { Global, css } from "@emotion/react"
import { Nav, Footer, Sidebar } from "../components"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <>
      <Global styles={globalStyles} />
      <Nav />
      {isSidebarOpen && <Sidebar />}
      <div
        css={css`
          display: flex;
          min-height: 85vh;
          flex-direction: column;

          main {
            flex-grow: 1;
          }
        `}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
