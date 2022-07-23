import React, { useContext } from "react"
import { cloudContext } from "./context"
import { CloudWordProps, SpanRef } from "./types"

export const CloudWord = ({
  children: content,
  idle = false
}: CloudWordProps) => {
  const { every, words } = useContext(cloudContext)
  return (
    <span
      className="cloud-element word"
      ref={(span: SpanRef) => {
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
          !every.includes(span) && every.push(span!)
          !words.includes(span) && words.push(span!)
        }
      }}
    >
      {content}
    </span>
  )
}