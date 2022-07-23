import React, { useContext } from "react"
import { cloudContext } from "./context"
export const CloudWord = ({ children: content, idle = false }) => {
  const { every, words } = useContext(cloudContext)
  return (React.createElement("span", {
    className: "cloud-element word",
    ref: (span) => {
      if (span) {
        if (idle) {
          span.classList.remove("fill")
          span.classList.add("idle")
        }
        else {
          span.classList.remove("idle")
          span.classList.add("fill")
        }
        span.idle = idle
        !every.includes(span) && every.push(span)
        !words.includes(span) && words.push(span)
      }
    },
  }, content))
}
