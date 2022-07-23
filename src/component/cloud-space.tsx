import React, { useContext } from "react"
import { cloudContext } from "./context"
import { SpanRef } from "./types"

export const CloudSpace = () => {
  const { every, spaces } = useContext(cloudContext)
  return (
    <span
      className="cloud-element space"
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