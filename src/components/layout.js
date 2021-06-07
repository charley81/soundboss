import React, { useContext } from "react"
import globalStyles from "../styles/global-styles"
import { Global } from "@emotion/react"
import { Nav, Footer, Sidebar } from "../components"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  const data = useContext(GatsbyContext)
  console.log(data)

  return (
    <>
      <Global styles={globalStyles} />
      <Nav />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
