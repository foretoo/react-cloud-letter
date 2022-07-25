import React, { useContext } from "react"
import { CloudContext } from "./context"
import { staticStyle } from "./helpers"
export const CloudWord = ({ children: content, idle = false }) => {
  const { every, words } = useContext(CloudContext)
  return (React.createElement("span", {
    className: "word",
    style: staticStyle.element,
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