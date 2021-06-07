import React, { useContext } from "react"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"
import { css } from "@emotion/react"

const Navlink = ({ page }) => {
  const { links } = useContext(GatsbyContext)

  return (
    <div>
      <button>{page}</button>
      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link
          if (link.page === page) {
            return (
              <Link>
                {icon}
                {label}
              </Link>
            )
          }
        })}
        <div className="caret"></div>
      </div>
    </div>
  )
}

export default Navlink
