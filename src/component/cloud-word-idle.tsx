import { useContext } from "react"
import { cloudContext } from "./context"
import { CloudWordProps } from "./types"

export const CloudWordIdle = ({
  children: content
}: CloudWordProps) => {
  const { every } = useContext(cloudContext)
  return (
    <span
      className="cloud-element word idle"
      ref={(span) => span && !every.includes(span) && every.push(span!)}
    >
      {content}
    </span>
  )
}