import React, { useContext } from "react"
import { CloudContext } from "./context"
import { staticStyle } from "./helpers"
export const CloudSpace = () => {
  const { every, spaces } = useContext(CloudContext)
  return (React.createElement("span", {
    className: "space",
    style: {
      padding: 0,
      width: "var(--gap)",
      ...staticStyle.element,
    },
    ref: (span) => {
      if (span) {
        !every.includes(span) && every.push(span)
        !spaces.includes(span) && spaces.push(span)
      }
    },
  }, " "))
}
//# sourceMappingURL=cloud-space.js.map