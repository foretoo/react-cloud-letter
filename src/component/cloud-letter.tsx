import { CSSProperties, useState, useEffect, useRef } from "react"
import { CloudCanvasProps, CloudLetterProps, CloudRect } from "./types"
import { split, elementSetter } from "./helpers"
import { cloudContext } from "./context"
import { CloudWord } from "./cloud-word"
import { CloudSpace } from "./cloud-space"
import { CloudWordIdle } from "./cloud-word-idle"
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
  const everyRef = useRef<HTMLSpanElement[]>([])
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const spacesRef = useRef<HTMLSpanElement[]>([])

  // helpers
  const spaceWidthRef = useRef(spaceWidth)
  const modeRef = useRef(mode)

  if (modeRef.current !== mode) {
    everyRef.current.length = 0
    modeRef.current = mode
  }



  // find common denominator
  // and set widths of all elements with respect to it
  useEffect(() => {
    const { height: h } = everyRef.current[0].getBoundingClientRect()
    const deno = h / 2 | 0 // align === "center" ? h : h / 2 | 0 // <-- denominator
    
    // const sw = Math.ceil(spaceWidth / deno) * deno
    // spacesRef.current.forEach((space) => {
    //   space.style.width = `${sw}px`
    // })
    spaceWidthRef.current = Math.ceil(spaceWidth / deno) * deno

    everyRef.current.forEach((span) => {
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
      const clouds = (mode === "WORD" ? wordsRef : spacesRef).current
      const cloudRects = clouds.map((span) => {
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
      setData({ width, height, align, cloudRects, cloudStyle })
      toggleTrigger(!triggerSetData)
    }
  }, [ triggerSetData ])



  if (typeof content === "string") {
    const setFilled = elementSetter(mode === "WORD" ? CloudWord : CloudWordIdle, CloudSpace)
    content = split(content).map(setFilled)
  }
  else if (Array.isArray(content)) {
    const setIdle = elementSetter(CloudWordIdle, CloudSpace)
    content = content.reduce((acc: JSX.Element[], element, i) => {
      typeof element === "string"
        ? split(element).forEach((idles, j) => acc.push(setIdle(idles, `${i}-${j}`)))
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
      <cloudContext.Provider value={{
        every: everyRef.current,
        words: wordsRef.current,
        spaces: spacesRef.current,
      }}>
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