import { Fragment, CSSProperties, useState, useLayoutEffect, useRef } from "react"
import { CloudData, CloudLetterProps } from "./types"
import { CloudWord } from "./cloud-word"
import { CloudSpace } from "./cloud-space"
import "./cloud.sass"



const CloudLetter = ({
  children: content,
  width,
  spaceWidth,
  fontStyle,
}: CloudLetterProps) => {

  const [ data, setData ] = useState<CloudData[]>([])
  const cloudsRef = useRef<HTMLSpanElement[]>([])

  useLayoutEffect(() => {
    setData(
      cloudsRef.current.map(({
        offsetLeft, offsetTop, offsetWidth, offsetHeight
      }) => ({
        x: offsetLeft,
        y: offsetTop,
        w: offsetWidth,
        h: offsetHeight
      }))
    )
  }, [ content, width, spaceWidth, fontStyle ])

  if (typeof content === "string") {
    const words = content.match(/[^\s]+/g)
    content = words
    ? words.map((word, i) => (
      <Fragment key={`${i}-${word}`}>
        {i > 0 && <CloudSpace/>}
        <CloudWord ref={cloudsRef}>{word}</CloudWord>
      </Fragment>
    ))
    : null
  }

  return (
    <p
      className="cloud-letter"
      style={{ width, "--gap": spaceWidth, ...fontStyle } as CSSProperties}
    >
      {content}
    </p>
  )
}

export {
  CloudLetter,
  CloudWord,
}