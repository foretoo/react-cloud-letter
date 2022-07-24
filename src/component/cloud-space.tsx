import React, { CSSProperties, useContext } from "react"
import { CloudContext } from "./context"
import { SpanRef } from "./types"

export const CloudSpace = () => {
  const { every, spaces, elementStyle } = useContext(CloudContext)
  return (
    <span
      className="space"
      style={{
        padding: 0,
        width: "var(--gap)",
        ...elementStyle as CSSProperties}}
      ref={(span: SpanRef) => {
        if (span) {
          !every.includes(span) && every.push(span!)
          !spaces.includes(span) && spaces.push(span!)
        }
      }}
    >
      {" "}
    </span>
  )
}