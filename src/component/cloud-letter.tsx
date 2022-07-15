import { CloudLetterProps } from "./types"
import { CloudWord } from "./cloud-word"
import { CloudSpace } from "./cloud-space"
import "./cloud.sass"
import { Fragment } from "react"



const CloudLetter = ({
  children: content,
  width,
  spaceWidth,
}: CloudLetterProps) => {

  if (typeof content === "string") {
    const words = content.match(/[^\s]+/g)
    content = words
    ? words.map((word, i) => (
      <Fragment key={`${i}-${word}`}>
        {i > 0 && <CloudSpace/>}
        <CloudWord>{word}</CloudWord>
      </Fragment>
    ))
    : null
  }

  return (
    <p
      className="cloud-letter"
      style={{ width, "--gap": spaceWidth } as React.CSSProperties}
    >
      {content}
    </p>
  )
}

export {
  CloudLetter
}