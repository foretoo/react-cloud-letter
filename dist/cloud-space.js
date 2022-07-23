import React, { useContext } from "react"
import { cloudContext } from "./context"
export const CloudSpace = () => {
  const { every, spaces } = useContext(cloudContext)
  return (React.createElement("span", {
    className: "cloud-element space",
    ref: (span) => {
      if (span) {
        !every.includes(span) && every.push(span)
        !spaces.includes(span) && spaces.push(span)
      }
    },
  }, " "))
}
