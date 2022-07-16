import { CloudWordProps } from "./types"

export const CloudWordIdle = ({
  children: content
}: CloudWordProps) => (
  <span className="cloud-word">{content}</span>
)