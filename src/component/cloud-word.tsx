
import { forwardRef, ForwardedRef, MutableRefObject } from "react"
import { CloudWordProps } from "./types"

export const CloudWord = forwardRef((
  { children: content }: CloudWordProps,
  ref: ForwardedRef<HTMLSpanElement[]>
) => {
  return (
    <span
      className="cloud-word"
      ref={(span) => {
        (ref as MutableRefObject<HTMLSpanElement[]>).current.push(span!)
      }}
    >
      {content}
    </span>
  )
})