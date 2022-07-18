import { useLayoutEffect, useRef } from "react"
import { CloudCanvasProps } from "./types"
import polygonBoolean, { MultiPolygon } from "polygon-clipping"
import roundPolygon, { InitPoint, RoundedPoint } from "round-polygon"

export const CloudCanvas = (
  { width, height, cloudRects, cloudStyle }: CloudCanvasProps
) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const l = cloudStyle?.strokeWidth || 2

  useLayoutEffect(() => {

    const pr = window.devicePixelRatio
    const canvas = canvasRef.current!
    canvas.width = (width + l) * pr
    canvas.height = (height + 1 + l) * pr
    canvas.style.width = `${width + l}px`
    canvas.style.height = `${height + 1 + l}px`
    canvas.style.top = canvas.style.left = `${-l/2}px`

    const ctx = canvas.getContext("2d")!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = cloudStyle?.fill || "white"
    ctx.lineJoin = "round"
    ctx.strokeStyle = cloudStyle?.stroke || "black"
    ctx.lineWidth = l * pr

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

    ctx.translate(l/2 * pr, l/2 * pr)
    multiRoundedPolies.forEach((roundedPolies) => {
      ctx.beginPath()
      roundedPolies.forEach((roundedPoly) => {
        roundedPoly.forEach((p, i) => {
          !i && ctx.moveTo(p.in.x * pr, p.in.y * pr)
          ctx.arcTo(p.x * pr, p.y * pr, p.out.x * pr, p.out.y * pr, p.arc.radius * pr)
          ctx.lineTo(p.next.in.x * pr, p.next.in.y * pr)
        })
      })
      ctx.fill()
      ctx.stroke()
    })
    ctx.setTransform(1, 0, 0, 1, 0, 0)

  }, [ width, height, cloudRects ])

  return (
    <canvas ref={canvasRef} className="cloud-canvas"></canvas>
  )
}