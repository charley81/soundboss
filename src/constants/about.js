import React from "react"
import { GiMicrophone } from "react-icons/gi"
import { BsSpeaker } from "react-icons/bs"
import { CgPiano } from "react-icons/cg"

export default [
  {
    id: 1,
    icons: <GiMicrophone className="icon" />,
    label: "Mission:",
    text:
      "Create the highest standard of music possible, while bringing an enjoyable experience while visiting our world class recording studios",
  },
  {
    id: 2,
    icons: <BsSpeaker className="icon" />,
    label: "Vision:",
    text:
      "Assist artist in pursuing  successful careers in music by recording the biggest hits of today and the future",
  },
  {
    id: 3,
    icons: <CgPiano className="icon" />,
    label: "EST:",
    text:
      "Established in 2015 by Atlanta’s own “Money Mick” to bring the highest standard of sound to Atlanta",
  },
]
