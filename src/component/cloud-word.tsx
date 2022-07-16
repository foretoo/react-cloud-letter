import { useContext } from "react"
import { cloudContext } from "./context"
import { CloudWordProps } from "./types"

export const CloudWord = ({
  children: content
}: CloudWordProps) => {
  const cloudRects = useContext(cloudContext)
  return (
    <span
      className="cloud-word"
      ref={(span) => cloudRects.push(span!)}
    >
      {content}
    </span>
  )
}