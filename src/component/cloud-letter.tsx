import { CSSProperties, useState, useEffect, useRef } from "react"
import { CloudCanvasProps, CloudLetterProps, CloudRect } from "./types"
import { split, IdleOrSpace, WordOrSpace } from "./helpers"
import { cloudContext } from "./context"
import { CloudWord } from "./cloud-word"
import { CloudCanvas } from "./cloud-canvas"
import "./cloud.sass"



const CloudLetter = (
  {
    children: content,
    width,
    spaceWidth,
    wordStyle,
  }: CloudLetterProps
) => {

  const [ data, setData ] = useState<CloudCanvasProps | null>(null)
  const letterRef = useRef<HTMLParagraphElement>(null)
  const spansRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    const cloudRects = spansRef.current.map((
      { offsetLeft: x, offsetTop: y, offsetWidth: w, offsetHeight: h }
    ) => (
      [[
        [ x,     y     ],
        [ x + w, y     ],
        [ x + w, y + h ],
        [ x,     y + h ],
      ]] as CloudRect
    ))
    const { offsetWidth: width, offsetHeight: height } = letterRef.current!
    setData({ width, height, cloudRects })
  }, [ content, width, spaceWidth, wordStyle ])



  if (typeof content === "string") {
    content = split(content).map(WordOrSpace)
  }
  else if (Array.isArray(content)) {
    content = content.reduce((acc: JSX.Element[], element) => {
      if (typeof element === "string")
        split(element).forEach((idleOrSpace, i) => acc.push(IdleOrSpace(idleOrSpace, i)))
      else
        acc.push(element)
      return acc
    }, [])
  }



  return (
    <p
      ref={letterRef}
      className="cloud-letter"
      style={{ width, "--gap": spaceWidth, ...wordStyle } as CSSProperties}
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