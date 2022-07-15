import { CloudWordProps } from "./types"



export const CloudWord = ({
  children: content
}: CloudWordProps) => {
    return <span className="cloud-word">{content}</span>
}