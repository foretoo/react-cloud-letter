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
//# sourceMappingURL=helpers.js.map