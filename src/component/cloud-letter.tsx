import { Fragment, CSSProperties, useState, useEffect, useRef } from "react"
import { CloudCanvasProps, CloudLetterProps, CloudRect } from "./types"
import { CloudWord } from "./cloud-word"
import { CloudSpace } from "./cloud-space"
import { CloudCanvas } from "./cloud-canvas"
import "./cloud.sass"



const CloudLetter = ({
  children: content,
  width,
  spaceWidth,
  fontStyle,
}: CloudLetterProps) => {

  const [ data, setData ] = useState<CloudCanvasProps | null>(null)
  const letterRef = useRef<HTMLParagraphElement>(null)
  const cloudsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    const cloudRects = cloudsRef.current.map(({
      offsetLeft, offsetTop, offsetWidth, offsetHeight
    }) => ([[
      [offsetLeft, offsetTop],
      [offsetLeft + offsetWidth, offsetTop],
      [offsetLeft + offsetWidth, offsetTop + offsetHeight],
      [offsetLeft, offsetTop + offsetHeight]
    ]] as CloudRect))
    const { offsetWidth: width, offsetHeight: height } = letterRef.current!
    setData({ width, height, cloudRects })
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
      ref={letterRef}
      className="cloud-letter"
      style={{ width, "--gap": spaceWidth, ...fontStyle } as CSSProperties}
    >
      {content}
      {data && <CloudCanvas {...data} />}
    </p>
  )
}

export {
  CloudLetter,
  CloudWord,
}