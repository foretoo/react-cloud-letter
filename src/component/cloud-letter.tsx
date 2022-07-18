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
  const [ triggerSetData, toggleTrigger ] = useState(false)
  const letterRef = useRef<HTMLParagraphElement>(null)
  const spansRef = useRef<HTMLSpanElement[]>([])
  const spaceWidthRef = useRef(spaceWidth)
  const modeRef = useRef(mode)

  if (modeRef.current !== mode) {
    spansRef.current.length = 0
    modeRef.current = mode
  }

  const setFilled = mode === "WORD"
    ? elementSetter(CloudWord, CloudSpaceIdle)
    : elementSetter(CloudWordIdle, CloudSpace)

  const setIdle = elementSetter(CloudWordIdle, CloudSpaceIdle)

  // find common denominator
  // and set widths of all elements with respect to it
  useEffect(() => {
    const { height: h } = spansRef.current[0].getBoundingClientRect()
    const deno = h / 2 | 0 // <-- denominator

    spaceWidthRef.current = Math.round(spaceWidth / deno) * deno

    spansRef.current.forEach((span) => {
      mode === "SPACE" && (span.style.width = `${spaceWidthRef.current}px`)
      let { width: w } = span.getBoundingClientRect()
      w = Math.ceil(w / deno) * deno
      span.style.width = `${w}px`
    })

    toggleTrigger(!triggerSetData)
  }, [ content, width, spaceWidth, align, cloudStyle, mode ])

  // and then extract coordinates
  useEffect(() => {
    if (triggerSetData) {
      const { height, top, left } = letterRef.current!.getBoundingClientRect()
      const cloudRects = spansRef.current.map((span) => {
        let { x, y, width: w, height: h } = span.getBoundingClientRect()
        x -= left
        y -= top
        return (
          [[
            [ x,     y     ],
            [ x + w, y     ],
            [ x + w, y + h ],
            [ x,     y + h ],
          ]] as CloudRect
        )
      })
      setData({ width, height, cloudRects, cloudStyle })
      toggleTrigger(!triggerSetData)
    }
  }, [ triggerSetData ])



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
          "--gap": `${spaceWidthRef.current}px`,
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