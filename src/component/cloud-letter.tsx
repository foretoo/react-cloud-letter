import { CSSProperties, useState, useEffect, useRef } from "react"
import { CloudCanvasProps, CloudLetterProps, CloudRect, SpanRef } from "./types"
import { split, getCloudMapper } from "./helpers"
import { cloudContext } from "./context"
import { CloudWord } from "./cloud-word"
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
  const everyRef = useRef<SpanRef[]>([])
  const wordsRef = useRef<SpanRef[]>([])
  const spacesRef = useRef<SpanRef[]>([])

  // helpers
  const spaceWidthRef = useRef(spaceWidth)



  // find common denominator
  // and set widths of all elements with respect to it
  useEffect(() => {
    const { height: h } = everyRef.current[0].getBoundingClientRect()
    const deno = h / 2 | 0 // align === "center" ? h : h / 2 | 0 // <-- denominator

    spaceWidthRef.current = Math.ceil(spaceWidth / deno) * deno

    wordsRef.current.forEach((span) => {
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
      const clouds = mode === "WORD"
        ? wordsRef.current.filter((span) => !span.idle)
        : spacesRef.current
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
    const cloudMapper = getCloudMapper(mode === "WORD")
    content = split(content).map(cloudMapper)
  }
  else if (Array.isArray(content)) {
    const idleMapper = getCloudMapper(false)
    content = content.reduce((acc: JSX.Element[], element, i) => {
      typeof element === "string"
        ? split(element).forEach((idles, j) => acc.push(idleMapper(idles, `${i}-${j}`)))
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