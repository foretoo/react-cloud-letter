import { useLayoutEffect, useRef } from "react"
import { CloudCanvasProps } from "./types"
import polygonBoolean, { MultiPolygon } from "polygon-clipping"
import roundPolygon, { InitPoint, RoundedPoint } from "round-polygon"

export const CloudCanvas = (
  { width, height, cloudRects, cloudStyle }: CloudCanvasProps
) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const l = cloudStyle?.strokeWidth || 2
  const sy = 4

  useLayoutEffect(() => {

    const pr = window.devicePixelRatio
    const canvas = canvasRef.current!
    const _width = width + l
    const _height = height + (Math.abs(sy) > l/2 ? Math.abs(sy) + l/2 : l)
    canvas.width = _width * pr
    canvas.height = _height * pr
    canvas.style.width = `${_width}px`
    canvas.style.height = `${_height}px`
    canvas.style.top = `${sy < 0 ? (-sy > l/2 ? sy : -l/2) : -l/2}px`
    canvas.style.left = `${-l/2}px`

    const ctx = canvas.getContext("2d")!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = cloudStyle?.fill || "white"
    if (l > 0) {
      ctx.lineJoin = "round"
      ctx.strokeStyle = cloudStyle?.stroke || "black"
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
    console.log(offsetY);
    ctx.translate(l/2 * pr, offsetY * pr)
    multiRoundedPolies.forEach((roundedPolies) => {
      ctx.beginPath()
      roundedPolies.forEach((roundedPoly) => {
        roundedPoly.forEach((p, i) => {
          !i && ctx.moveTo(p.in.x * pr, p.in.y * pr)
          ctx.arcTo(p.x * pr, p.y * pr, p.out.x * pr, p.out.y * pr, p.arc.radius * pr)
          ctx.lineTo(p.next.in.x * pr, p.next.in.y * pr)
        })
      })
      ctx.shadowOffsetY = sy * pr
      ctx.shadowColor = "black"
      ctx.fill()
      ctx.shadowOffsetY = 0
      ctx.stroke()
    })
    ctx.setTransform(1, 0, 0, 1, 0, 0)

  }, [ width, height, cloudRects ])

  return (
    <canvas ref={canvasRef} className="cloud-canvas"></canvas>
  )
}