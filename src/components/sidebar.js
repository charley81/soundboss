import React from "react"
import { css } from "@emotion/react"

const Sidebar = () => {
  return (
    <div
      css={css`
        background: var(--color-light);
        color: var(--color-dark);
        z-index: 5;
      `}
    >
      <h1>sidebar component</h1>
    </div>
  )
}

export default Sidebar
