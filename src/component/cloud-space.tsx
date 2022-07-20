import { useContext } from "react"
import { cloudContext } from "./context"

export const CloudSpace = () => {
  const { every, spaces } = useContext(cloudContext)
  return (
    <span
      className="cloud-element space"
      ref={(span) => span && !spaces.includes(span) && spaces.push(span)}
    >
      {" "}
    </span>
  )
}