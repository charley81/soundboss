import * as React from "react"
import globalStyles from "../styles/global-styles"
import { Global } from "@emotion/react"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {/* <Nav /> */}
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
