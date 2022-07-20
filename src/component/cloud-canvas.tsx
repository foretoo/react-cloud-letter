import { useLayoutEffect, useRef } from "react"
import { CloudCanvasProps } from "./types"
import polygonBoolean, { MultiPolygon } from "polygon-clipping"
import roundPolygon, { InitPoint, RoundedPoint } from "round-polygon"
import { canvasDebug } from "./helpers"

export const CloudCanvas = (
  { width, height, cloudHeight, align, cloudRects, fill, stroke, strokeWidth }: CloudCanvasProps
) => {

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
  }, [ width, height, strokeWidth, sx, sy ])

  useLayoutEffect(() => {
    const pr = window.devicePixelRatio
    const ctx = ctxRef.current!
    const canvas = canvasRef.current!

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = fill
    if (l > 0) {
      ctx.lineJoin = "round"
      ctx.strokeStyle = stroke
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
          roundPolygon(poly, cloudHeight / 4)
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

    // canvasDebug(ctx, width, height, align, cloudRects)

    ctx.setTransform(1, 0, 0, 1, 0, 0)
  }, [ cloudRects ])

  return (
    <canvas ref={canvasRef} className="cloud-canvas"></canvas>
  )
}