import { useLayoutEffect, useRef } from "react"
import { CloudCanvasProps } from "./types"

export const CloudCanvas = ({
  width, height, cloudRects
}: CloudCanvasProps) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const pr = window.devicePixelRatio
    const canvas = canvasRef.current!
    canvas.width = width * pr
    canvas.height = height * pr
    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    
    const ctx = canvas.getContext("2d")!
    ctx.fillStyle = "blue"
    cloudRects.forEach(({ x, y, w, h }) => {
      ctx.beginPath()
      ctx.fillRect(x * pr, y * pr, w * pr, h * pr)
    })
  }, [ width, height, cloudRects ])

  return (
    <canvas ref={canvasRef} className="cloud-canvas"></canvas>
  )
}