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
    cloudHeight,
    align = "left",
    mode = "WORD",

    fill = "White",
    stroke = "DodgerBlue",
    strokeWidth = 2,
  }: CloudLetterProps
) => {

  const [ data, setData ] = useState<{ width: number, height: number, cloudRects: CloudRect[] } | null>(null)
  const letterRef = useRef<HTMLParagraphElement>(null)
  const everyRef = useRef<SpanRef[]>([])
  const wordsRef = useRef<SpanRef[]>([])
  const spacesRef = useRef<SpanRef[]>([])

  // helpers
  const contentRef = useRef(content)
  const deno = cloudHeight / 2 | 0 // <-- denominator
  const space_width = Math.ceil(spaceWidth / deno) * deno
  const spaceWidthRef = useRef(NaN)
  const alignRef = useRef(align)

  if (contentRef.current !== content) {
    everyRef.current.length = 0
    wordsRef.current.length = 0
    spacesRef.current.length = 0
    contentRef.current = content
  }



  useEffect(() => {
    const { height, top, left } = letterRef.current!.getBoundingClientRect()

    wordsRef.current.forEach((span) => {
      span.style.width = ""
      let { width: w } = span.getBoundingClientRect()
      w = Math.ceil(w / deno) * deno
      span.style.width = `${w}px`
    })
    
    if (align === "center") {
      if (spaceWidthRef.current !== space_width || alignRef.current !== align) {
        everyRef.current.forEach((span) => span.style.left = "")
        const { top, left } = letterRef.current!.getBoundingClientRect()
        let yh = NaN, xo = NaN
        everyRef.current.forEach((span) => {
          let { x, y } = span.getBoundingClientRect()
          x -= left
          y -= top
          if (y !== yh) {
            yh = y
            xo = -((x % deno) / deno) * deno
          }
          span.style.left = `${xo}px`
        })
      }
    }
    else everyRef.current.forEach((span) => span.style.left = "")
    spaceWidthRef.current !== space_width && (spaceWidthRef.current = space_width)
    alignRef.current !== align && (alignRef.current = align)


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
    setData({ width, height, cloudRects })

  }, [ content, width, spaceWidth, cloudHeight, align, mode ])



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
          "--gap": `${space_width}px`,
          "--height": `${cloudHeight}px`,
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
      {data && <CloudCanvas
        {...data}
        cloudHeight={cloudHeight}
        align={align}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />}
    </p>
  )
}



export {
  CloudLetter,
  CloudWord,
}