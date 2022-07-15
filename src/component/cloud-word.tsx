
import { forwardRef, MutableRefObject } from "react"
import { CloudWordProps } from "./types"

export const CloudWord = forwardRef(({
  children: content,
}: CloudWordProps, ref) => {
  return (
    <span
      className="cloud-word"
      ref={(cloud) => {
        (ref as MutableRefObject<HTMLSpanElement[]>).current.push(cloud!)
      }}
    >
      {content}
    </span>
  )
})