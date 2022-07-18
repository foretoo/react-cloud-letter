import { useContext } from "react"
import { cloudContext } from "./context"

export const CloudSpace = () => {
  const cloudRects = useContext(cloudContext)
  return (
    <span
      className="cloud-element space"
      ref={(span) => span && !cloudRects.includes(span) && cloudRects.push(span)}
    >
      {" "}
    </span>
  )
}