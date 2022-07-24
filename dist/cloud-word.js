import React, { useContext } from "react"
import { CloudContext } from "./context"
export const CloudWord = ({ children: content, idle = false }) => {
  const { every, words, elementStyle } = useContext(CloudContext)
  return (React.createElement("span", {
    className: "word",
    style: elementStyle,
    ref: (span) => {
      if (span) {
        if (idle) {
          span.style.margin = "0"
          span.style.padding = "var(--padding-idle)"
        }
        else {
          span.style.padding = "var(--padding)"
          span.style.margin = "var(--margin-partial)"
        }
        span.idle = idle
        !every.includes(span) && every.push(span)
        !words.includes(span) && words.push(span)
      }
    },
  }, content))
}
//# sourceMappingURL=cloud-word.js.map