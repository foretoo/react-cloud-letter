import { useLayoutEffect, useRef } from "react"
import { CloudCanvasProps } from "./types"
import polygonBoolean from "polygon-clipping"
import roundPolygon, { InitPoint } from "round-polygon"

export const CloudCanvas = ({
  width, height, cloudRects
}: CloudCanvasProps) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const pr = window.devicePixelRatio
    const canvas = canvasRef.current!
    canvas.width = width * pr
    canvas.height = (height+1) * pr
    canvas.style.width = width + "px"
    canvas.style.height = (height+1) + "px"
    const ctx = canvas.getContext("2d")!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "blue"

    const mergeds = polygonBoolean.union(...cloudRects)
    const polies: InitPoint[][] = []
    mergeds.forEach((merged, i) => {
      merged[0].pop()
      polies[i] = merged[0].map((p) => ({ x: p[0], y: p[1] }))
    })

    const roundedPolies = polies.map((points) => roundPolygon(points, 10))
    roundedPolies.forEach((roundedPoly) => {
      ctx.beginPath()
      ctx.moveTo(roundedPoly[0].in.x * pr, roundedPoly[0].in.y * pr)
      roundedPoly.forEach((p) => {
        ctx.arcTo(p.x * pr, p.y * pr, p.out.x * pr, p.out.y * pr, p.arc.radius * pr)
        ctx.lineTo(p.next.in.x * pr, p.next.in.y * pr)
      })
      ctx.fill()
    })
    
  }, [ width, height, cloudRects ])

  return (
    <canvas ref={canvasRef} className="cloud-canvas"></canvas>
  )
}