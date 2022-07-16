import { Fragment, CSSProperties, useState, useEffect, useRef } from "react"
import { CloudCanvasProps, CloudLetterProps, CloudRect } from "./types"
import { cloudContext } from "./context"
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
  const spansRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    const cloudRects = spansRef.current.map(({
      offsetLeft: x, offsetTop: y, offsetWidth: w, offsetHeight: h
    }) => ([[
      [ x,     y     ],
      [ x + w, y     ],
      [ x + w, y + h ],
      [ x,     y + h ],
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
          <CloudWord>{word}</CloudWord>
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
      <cloudContext.Provider value={spansRef.current}>
        {content}
      </cloudContext.Provider>
      {data && <CloudCanvas {...data} />}
    </p>
  )
}

export {
  CloudLetter,
  CloudWord,
}