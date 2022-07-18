import { CSSProperties, useState, useEffect, useRef } from "react"
import { CloudCanvasProps, CloudLetterProps, CloudRect } from "./types"
import { split, elementSetter } from "./helpers"
import { cloudContext } from "./context"
import { CloudWord } from "./cloud-word"
import { CloudSpace } from "./cloud-space"
import { CloudWordIdle } from "./cloud-word-idle"
import { CloudSpaceIdle } from "./cloud-space-idle"
import { CloudCanvas } from "./cloud-canvas"
import "./cloud.sass"



const CloudLetter = (
  {
    children: content,
    width,
    spaceWidth,
    align = "left",
    cloudStyle,
    mode = "WORD",
  }: CloudLetterProps
) => {

  const [ data, setData ] = useState<CloudCanvasProps | null>(null)
  const letterRef = useRef<HTMLParagraphElement>(null)
  const spansRef = useRef<HTMLSpanElement[]>([])

  const setFilled = mode === "WORD"
    ? elementSetter(CloudWord, CloudSpaceIdle)
    : elementSetter(CloudWordIdle, CloudSpace)

  const setIdle = elementSetter(CloudWordIdle, CloudSpaceIdle)

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
    setData({ width, height, cloudRects, cloudStyle })
  }, [ content, width, spaceWidth ])



  if (typeof content === "string") {
    content = split(content).map(setFilled)
  }
  else if (Array.isArray(content)) {
    content = content.reduce((acc: JSX.Element[], element) => {
      typeof element === "string"
        ? split(element).forEach((idles, i) => acc.push(setIdle(idles, i)))
        : acc.push(element)
      return acc
    }, [])
  }



  return (
    <p
      ref={letterRef}
      className="cloud-letter"
      style={{
          "width": `${width}px`,
          "--gap": `${spaceWidth}px`,
          "--align": align
        } as CSSProperties
      }
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