import React from "react"
import { GiMicrophone } from "react-icons/gi"
import { BsSpeaker } from "react-icons/bs"
import { CgPiano } from "react-icons/cg"

export default [
  {
    id: 1,
    icons: <GiMicrophone className="icon" />,
    label: "Recording:",
    text:
      "Record on the best microphones made, get that perfect vocal that you've always wanted, we match the microphone to your voice for best results",
  },
  {
    id: 2,
    icons: <BsSpeaker className="icon" />,
    label: "Engineering:",
    text:
      "In todays age and time there is no reason to release poor quality audio. We provide professional mixing and mastering by the best engineers in the industry",
  },
  {
    id: 3,
    icons: <CgPiano className="icon" />,
    label: "Production:",
    text:
      "Need a home to produce, look no further. We offer hourly and day sessions in our production room that's home to some of the greats",
  },
]
