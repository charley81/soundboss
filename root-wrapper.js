// this is so you can use the context api
import React from "react"
import { GatsbyProvider } from "./src/context/context"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
