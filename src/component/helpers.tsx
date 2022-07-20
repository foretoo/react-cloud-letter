import { CloudSpace } from "./cloud-space"
import { CloudWord } from "./cloud-word"
import { Align, CloudRect } from "./types"



export const getCloudMapper = (
  modeIsWord: boolean
) => (
  element: string, i: number | string,
) => {
  return element.match(/\n/g)
    ? <br key={`${i}-break`} />
    : element === " "
      ? <CloudSpace key={`${i}-space`}/>
      : <CloudWord key={`${i}-${element}`} idle={!modeIsWord} >{element}</CloudWord>
}



export const split = (str: string) => str.split(/(\s)/).filter(Boolean)



export const canvasDebug = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  align: Align,
  cloudRects: CloudRect[],
) => {
  const pr = window.devicePixelRatio
  const findMin = () => (
    cloudRects.reduce((min, curr) => (
      curr[0][0][0] < min ? curr[0][0][0] : min
    ), width)
  )
  const min = findMin()

  ctx.strokeStyle = "#f74"
  ctx.lineWidth = 1

  const h = cloudRects[0][0][2][1] - cloudRects[0][0][0][1]
  const hh = align === "center" ? h : h / 2

  const proceedX = (
    fn: (x: number, y: number) => void,
    y: number
  ) => {
    if (align === "left")
      for (let x = 0; x < width; x+=hh) fn(x, y)
    else if (align === "right")
      for (let x = width; x > 0; x-=hh) fn(x, y)
    else if (align === "center")
      for (let x = min; x < width; x+=hh) fn(x, y)
  }
  const drawLine = (x: number, y: number) => {
    ctx.moveTo(x * pr, y * h * pr)
    ctx.lineTo(x * pr, (y + 1) * h * pr)
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