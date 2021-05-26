import * as React from "react"
import globalStyles from "../styles/global-styles"
import { Global } from "@emotion/react"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
