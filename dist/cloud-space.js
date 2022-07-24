import React, { useContext } from "react"
import { CloudContext } from "./context"
export const CloudSpace = () => {
  const { every, spaces, elementStyle } = useContext(CloudContext)
  return (React.createElement("span", {
    className: "space",
    style: {
      padding: 0,
      width: "var(--gap)",
      ...elementStyle,
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