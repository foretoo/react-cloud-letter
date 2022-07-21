import { CSSProperties, useRef, useLayoutEffect, useEffect } from "react"
import { CloudLetterProps, CloudRect, SpanRef } from "./types"
import { split, getCloudMapper } from "./helpers"
import { cloudContext } from "./context"
import { CloudWord } from "./cloud-word"
import polygonBoolean from "polygon-clipping"
import roundPolygon from "round-polygon"
import { canvasDebug } from "./helpers"
import "./cloud.sass"



const CloudLetter = (
  {
    children: content,
    width,
    spaceWidth,
    cloudHeight,
    align = "left",
    mode = "WORD",
    snap = 0,
    grid = false,

    fill = "White",
    stroke = "DodgerBlue",
    strokeWidth = 2,
  }: CloudLetterProps
) => {

  const letterRef = useRef<HTMLParagraphElement>(null)
  const everyRef = useRef<SpanRef[]>([])
  const wordsRef = useRef<SpanRef[]>([])
  const spacesRef = useRef<SpanRef[]>([])

  // helpers
  const contentRef = useRef(content)
  const deno = snap ? cloudHeight / snap : 1 // <-- denominator

  if (contentRef.current !== content) {
    everyRef.current.length = 0
    wordsRef.current.length = 0
    spacesRef.current.length = 0
    contentRef.current = content
  }



  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const l = strokeWidth
  const sy = 4
  const sx = -2
  const sc = stroke

  useLayoutEffect(() => {
    ctxRef.current = canvasRef.current!.getContext("2d")
  }, [])

  useLayoutEffect(() => {

    //// HANDLE WIDTHS, POSITIONS on SNAP
    
    wordsRef.current.forEach((span) => span.style.width = "")
    everyRef.current.forEach((span) => span.style.left = "")
    if (snap) {
      wordsRef.current.forEach((span) => {
        let { width: w } = span.getBoundingClientRect()
        w = Math.ceil(w / deno) * deno
        span.style.width = `${w}px`
      })
      
      if (align === "center") {
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


    //// DATA ////

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

    const multiRoundedPolies = polygonBoolean.union(...cloudRects)
      .map((merged) => (
        merged.map((poly) => {
          poly.pop()
          return poly.map((p) => ({ x: p[0], y: p[1] }))
        })
      ))
      .map((polies) => (
        polies.map((poly) => (
          roundPolygon(poly, cloudHeight / (snap === 1 ? 2 : 4))
        ))
      ))


    //// CANVAS ////

    const pr = window.devicePixelRatio
    const ctx = ctxRef.current!
    const canvas = canvasRef.current!

    const _width = width + (Math.abs(sx) > l/2 ? Math.abs(sx) + l/2 : l)
    const _height = height + (Math.abs(sy) > l/2 ? Math.abs(sy) + l/2 : l)
    canvas.width = _width * pr
    canvas.height = _height * pr
    canvas.style.width = `${_width}px`
    canvas.style.height = `${_height}px`
    canvas.style.top = `${sy < 0 ? (-sy > l/2 ? sy : -l/2) : -l/2}px`
    canvas.style.left = `${sx < 0 ? (-sx > l/2 ? sx : -l/2) : -l/2}px`

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = fill
    if (l > 0) {
      ctx.lineJoin = "round"
      ctx.strokeStyle = stroke
      ctx.lineWidth = l * pr
    }
    else ctx.strokeStyle = "transparent"

    const offsetY = sy < 0 ? (-sy > l/2 ? -sy : l/2) : l/2
    const offsetX = sx < 0 ? (-sx > l/2 ? -sx : l/2) : l/2
    ctx.translate(offsetX * pr, offsetY * pr)
    multiRoundedPolies.forEach((roundedPolies) => {
      ctx.beginPath()
      roundedPolies.forEach((roundedPoly) => {
        roundedPoly.forEach((p, i) => {
          !i && ctx.moveTo(p.in.x * pr, p.in.y * pr)
          ctx.arcTo(p.x * pr, p.y * pr, p.out.x * pr, p.out.y * pr, p.arc.radius * pr)
          ctx.lineTo(p.next.in.x * pr, p.next.in.y * pr)
        })
      })
      ctx.shadowOffsetX = sx * pr
      ctx.shadowOffsetY = sy * pr
      ctx.shadowColor = sc
      ctx.fill()
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.stroke()
    })

    snap && grid && canvasDebug(ctx, width, height, align, snap, cloudRects)

    ctx.setTransform(1, 0, 0, 1, 0, 0)

  })



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
          "--gap": `${snap ? Math.ceil(spaceWidth / deno) * deno : spaceWidth}px`,
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
      <canvas ref={canvasRef} className="cloud-canvas"></canvas>
    </p>
  )
}



export {
  CloudLetter,
  CloudWord,
}