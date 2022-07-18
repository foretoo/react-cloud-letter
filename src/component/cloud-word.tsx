import { useContext } from "react"
import { cloudContext } from "./context"
import { CloudWordProps } from "./types"

export const CloudWord = ({
  children: content
}: CloudWordProps) => {
  const cloudRects = useContext(cloudContext)
  return (
    <span
      className="cloud-element word"
      ref={(span) => span && !cloudRects.includes(span) && cloudRects.push(span)}
    >
      {content}
    </span>
  )
}