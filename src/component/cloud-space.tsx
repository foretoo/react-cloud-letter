import { useContext } from "react"
import { cloudContext } from "./context"

export const CloudSpace = () => {
  const cloudRects = useContext(cloudContext)
  return (
    <span
      className="cloud-element space"
      ref={(span) => cloudRects.push(span!)}
    >
      {" "}
    </span>
  )
}