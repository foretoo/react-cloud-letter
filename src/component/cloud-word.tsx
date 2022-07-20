import { useContext } from "react"
import { cloudContext } from "./context"
import { CloudWordProps } from "./types"

export const CloudWord = ({
  children: content
}: CloudWordProps) => {
  const { every, words } = useContext(cloudContext)
  return (
    <span
      className="cloud-element word"
      ref={(span) => {
        if (span) {
          !every.includes(span) && every.push(span!)
          !words.includes(span) && words.push(span!)
        }
      }}
    >
      {content}
    </span>
  )
}