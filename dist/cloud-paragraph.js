import React, { useRef, useLayoutEffect, useContext } from "react"
import { split, getCloudMapper, fillPolies } from "./helpers"
import { CloudContext } from "./context"
import polygonBoolean from "polygon-clipping"
import roundPolygon from "round-polygon"
import { staticStyle } from "./style"
export const CloudParagraph = ({
  children: content, width, spaceWidth = 48, cloudHeight = 32, padding = 10, align = "left", mode = "WORD", snap = 0, fill = "White", stroke = "DodgerBlue", strokeWidth = 2, shadowOffsetX = -3, shadowOffsetY = 5, shadowColor = stroke, font = {
    color: stroke,
    size: 16,
    family: "sans-serif",
    style: "none",
    variant: "none",
    weight: "none",
  },
}) => {
  const { every, words, spaces } = useContext(CloudContext)
  const letterRef = useRef(null)
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  // helpers
  const contentRef = useRef(content)
  const deno = snap ? cloudHeight / snap : 1 // <-- denominator to handle snapping
  if (contentRef.current !== content) {
    every.length = 0
    words.length = 0
    spaces.length = 0
    contentRef.current = content
  }
  useLayoutEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d")
    ctxRef.current.lineJoin = "round"
  }, [])
  useLayoutEffect(() => {
    //// HANDLE WIDTHS, POSITIONS on SNAP
    words.forEach((span) => span.style.width = "")
    every.forEach((span) => span.style.left = "")
    if (snap) {
      words.forEach((span) => {
        let { width: w } = span.getBoundingClientRect()
        w = Math.ceil(w / deno) * deno
        span.style.width = `${w}px`
      })
      if (align === "center") {
        const { top, left } = letterRef.current.getBoundingClientRect()
        let yh = NaN, xo = NaN
        every.forEach((span) => {
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
    const { height, top, left } = letterRef.current.getBoundingClientRect()
    const clouds = (mode === "WORD" || mode === "PARTIAL")
      ? words.filter((span) => !span.idle)
      : spaces
    const cloudRects = clouds.map((span) => {
      let { x, y, width: w, height: h } = span.getBoundingClientRect()
      x -= left
      y -= top
      return [[
        [ x, y ],
        [ x + w, y ],
        [ x + w, y + h ],
        [ x, y + h ],
      ]]
    })
    const multiRoundedPolies = cloudRects.length ? polygonBoolean.union(...cloudRects)
      .map((merged) => (merged.map((poly) => {
        poly.pop()
        return poly.map((p) => ({ x: p[0], y: p[1] }))
      })))
      .map((polies) => (polies.map((poly) => (roundPolygon(poly, cloudHeight / (snap === 1 ? 2 : 4)))))) : []
    //// CANVAS ////
    const pr = window.devicePixelRatio
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    const l = strokeWidth
    const sx = shadowOffsetX
    const sy = shadowOffsetY
    const _width = width + (Math.abs(sx) > l / 2 ? Math.abs(sx) + l / 2 : l)
    const _height = height + (Math.abs(sy) > l / 2 ? Math.abs(sy) + l / 2 : l)
    canvas.width = _width * pr
    canvas.height = _height * pr
    canvas.style.width = `${_width}px`
    canvas.style.height = `${_height}px`
    canvas.style.top = `${sy < 0 ? (-sy > l / 2 ? sy : -l / 2) : -l / 2}px`
    canvas.style.left = `${sx < 0 ? (-sx > l / 2 ? sx : -l / 2) : -l / 2}px`
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (l > 0)
      ctx.lineWidth = l * pr
    else
      ctx.strokeStyle = "transparent"
    const offsetY = sy < 0 ? (-sy > l / 2 ? -sy : l / 2) : l / 2
    const offsetX = sx < 0 ? (-sx > l / 2 ? -sx : l / 2) : l / 2
    // draw shadow
    ctx.fillStyle = shadowColor
    l > 0 && (ctx.strokeStyle = shadowColor)
    ctx.translate((offsetX + sx) * pr, (offsetY + sy) * pr)
    fillPolies(ctx, multiRoundedPolies, pr)
    // draw clouds
    ctx.fillStyle = fill
    l > 0 && (ctx.strokeStyle = stroke)
    ctx.translate(-sx * pr, -sy * pr)
    fillPolies(ctx, multiRoundedPolies, pr)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
  })
  const cloudMapper = getCloudMapper(mode)
  if (typeof content === "string") {
    content = split(content, mode).map(cloudMapper)
  }
  else if (Array.isArray(content)) {
    content = content.reduce((acc, element, i) => {
      typeof element === "string"
        ? split(element, mode).forEach((idles, j) => acc.push(cloudMapper(idles, `${i}-${j}`)))
        : acc.push(element)
      return acc
    }, [])
  }
  return (React.createElement("p", {
    ref: letterRef,
    style: {
      ...staticStyle.letter,
      "width": `${width}px`,
      "--gap": `${snap ? Math.ceil(spaceWidth / deno) * deno : spaceWidth}px`,
      "--height": `${cloudHeight}px`,
      "--padding": `0 ${padding}px`,
      "--padding-idle": `0 ${mode === "PARTIAL" ? 0 : padding}px`,
      "--margin-partial": `0 ${(mode === "PARTIAL" && snap === 0) ? font.size / 4 : 0}px`,
      "--align": align,
      "--color": font.color,
      "--font-size": `${font.size}px`,
      "--font-family": font.family,
      "--font-style": font.style,
      "--font-variant": font.variant,
      "--font-weight": font.weight,
    },
  }, content, React.createElement("canvas", { ref: canvasRef, style: { position: "absolute", zIndex: -1 }})))
}
//# sourceMappingURL=cloud-paragraph.js.map