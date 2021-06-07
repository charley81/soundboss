import React, { useContext } from "react"
import globalStyles from "../styles/global-styles"
import { Global } from "@emotion/react"
import { Nav, Footer, Sidebar } from "../components"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const { links, showSidebar, hideSidebar, isSidebarOpen } = useContext(
    GatsbyContext
  )

  return (
    <>
      <Global styles={globalStyles} />
      <Nav />
      {isSidebarOpen && <Sidebar />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
