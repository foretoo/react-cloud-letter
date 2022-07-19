import { useLayoutEffect, useRef } from "react"
import { CloudCanvasProps } from "./types"
import polygonBoolean, { MultiPolygon } from "polygon-clipping"
import roundPolygon, { InitPoint, RoundedPoint } from "round-polygon"

export const CloudCanvas = (
  { width, height, align, cloudRects, cloudStyle }: CloudCanvasProps
) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const l = cloudStyle?.strokeWidth || 0
  const sy = 0
  const sx = 0
  const sc = "#47f"

  useLayoutEffect(() => {

    const pr = window.devicePixelRatio
    const canvas = canvasRef.current!
    const _width = width + (Math.abs(sx) > l/2 ? Math.abs(sx) + l/2 : l)
    const _height = height + (Math.abs(sy) > l/2 ? Math.abs(sy) + l/2 : l)
    canvas.width = _width * pr
    canvas.height = _height * pr
    canvas.style.width = `${_width}px`
    canvas.style.height = `${_height}px`
    canvas.style.top = `${sy < 0 ? (-sy > l/2 ? sy : -l/2) : -l/2}px`
    canvas.style.left = `${sx < 0 ? (-sx > l/2 ? sx : -l/2) : -l/2}px`

    const ctx = canvas.getContext("2d")!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = cloudStyle?.fill || "white"
    if (l > 0) {
      ctx.lineJoin = "round"
      ctx.strokeStyle = cloudStyle?.stroke || sc
      ctx.lineWidth = l * pr
    }
    else ctx.strokeStyle = "transparent"

    const multiMerged: MultiPolygon = polygonBoolean.union(...cloudRects)

    const multiPolies: InitPoint[][][] =
      multiMerged.map((merged) => (
        merged.map((poly) => {
          poly.pop()
          return poly.map((p) => ({ x: p[0], y: p[1] }))
        })
      ))

    const multiRoundedPolies: RoundedPoint[][][] =
      multiPolies.map((polies) => (
        polies.map((poly) => (
          roundPolygon(poly, 7)
        ))
      ))

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

    //// debug ////
    let debug = true
    if (debug) {

      ctx.strokeStyle = "#f74"
      ctx.lineWidth = 1

      const h = cloudRects[0][0][2][1] - cloudRects[0][0][0][1]
      const hh = h / 2

      const proceedX = (
        fn: (x: number, y: number) => void,
        y: number
      ) => {
        if (align === "left")
          for (let x = 0; x < width / hh; x++) fn(x, y)
        else if (align === "right")
          for (let x = width / hh; x > 0; x--) fn(x, y)
      }
      const drawLine = (x: number, y: number) => {
        ctx.moveTo(x * hh * pr, y * h * pr)
        ctx.lineTo(x * hh * pr, (y + 1) * h * pr)
      }

      ctx.beginPath()
      for (let y = 0; y < height / h; y++) proceedX(drawLine, y)
      ctx.stroke()

      ctx.strokeStyle = "#f40"
      cloudRects.forEach((multipoly) => {
        ctx.beginPath()
        multipoly[0].forEach(([ x, y ], i) => {
          !i ? ctx.moveTo(x * pr, y * pr) : ctx.lineTo(x * pr, y * pr)
        })
        ctx.closePath()
        ctx.stroke()
      })

    }
    //// end debug ////

    ctx.setTransform(1, 0, 0, 1, 0, 0)

  }, [ width, height, cloudRects ])

  return (
    <canvas ref={canvasRef} className="cloud-canvas"></canvas>
  )
}