import { CloudWordProps } from "./types"

export const CloudWordIdle = ({
  children: content
}: CloudWordProps) => (
  <span className="cloud-element word">{content}</span>
)