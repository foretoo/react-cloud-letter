import { CloudSpace } from "./cloud-space"
import { CloudWord } from "./cloud-word"
import { Align, CloudRect, Mode } from "./types"



export const getCloudMapper = (
  mode: Mode
) => (
  element: string, i: number | string,
) => {
  if (element.match(/\n/g)) return <br key={`${i}-break`} />
  if (element === " ") return <CloudSpace key={`${i}-space`}/>
  if (mode === "WORD") return <CloudWord key={`${i}-${element}`} idle={false} >{element}</CloudWord>
  if (mode === "SPACE") return <CloudWord key={`${i}-${element}`} idle={true} >{element}</CloudWord>

  // ^\$[^\$]+\$$ | replace \$
  return element.match(/^\$\{[^\$\{]+\}$/g)
    ? <CloudWord key={`${i}-${element}`} idle={false} >{element.replace(/(^\$\{)|(\}$)/g, "")}</CloudWord>
    : <CloudWord key={`${i}-${element}`} idle={true} >{element}</CloudWord>
}



export const split = (
  str: string,
  mode: Mode
) => str.split(mode === "PARTIAL" ? /(\$\{[^\$\{]+\}|\s)/ : /(\s)/).filter(Boolean)



export const canvasDebug = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  align: Align,
  snap: number,
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
  const hh = h / snap

  const proceedX = (
    fn: (x: number, y: number) => void,
    y: number
  ) => {
    if (align === "left" || align === "center")
      for (let x = 0; x <= width; x+=hh) fn(x, y)
    else if (align === "right")
      for (let x = width; x >= 0; x-=hh) fn(x, y)
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