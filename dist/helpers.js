import React from "react"
import { CloudSpace } from "./cloud-space"
import { CloudWord } from "./cloud-word"
export const getCloudMapper = (mode) => (element, i) => {
  if (element.match(/\n/g))
    return React.createElement("br", { key: `${i}-break` })
  if (element === " ")
    return React.createElement(CloudSpace, { key: `${i}-space` })
  if (mode === "WORD")
    return React.createElement(CloudWord, { key: `${i}-${element}`, idle: false }, element)
  if (mode === "SPACE")
    return React.createElement(CloudWord, { key: `${i}-${element}`, idle: true }, element)
  return element.match(/^\$\{[^\$\{]+\}$/g)
    ? React.createElement(CloudWord, { key: `${i}-${element}`, idle: false }, element.replace(/(^\$\{)|(\}$)/g, ""))
    : React.createElement(CloudWord, { key: `${i}-${element}`, idle: true }, element)
}
export const split = (str, mode) => str.split(mode === "PARTIAL" ? /(\$\{[^\$\{]+\}|\s)/ : /(\s)/).filter(Boolean)
export const fillPolies = (ctx, multiPoly, pr) => {
  multiPoly.forEach((roundedPolies) => {
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
}
export const canvasDebug = (ctx, width, height, align, snap, cloudRects) => {
  const pr = window.devicePixelRatio
  ctx.strokeStyle = "#f74"
  ctx.lineWidth = 1
  const h = cloudRects[0][0][2][1] - cloudRects[0][0][0][1]
  const hh = h / snap
  const proceedX = (fn, y) => {
    if (align === "left" || align === "center")
      for (let x = 0; x <= width; x += hh)
        fn(x, y)
    else if (align === "right")
      for (let x = width; x >= 0; x -= hh)
        fn(x, y)
  }
  const drawLine = (x, y) => {
    ctx.moveTo(x * pr, y * h * pr)
    ctx.lineTo(x * pr, (y + 1) * h * pr)
  }
  ctx.beginPath()
  for (let y = 0; y < height / h; y++)
    proceedX(drawLine, y)
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
