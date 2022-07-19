type CloudWordProps = {
  children: string
}

// type CSSWordProperties = Partial<{
//   color: string
//   font: string
//   fontFamily: string
//   fontSize: string
//   fontStyle: string
//   fontVariant: string
//   fontWeight: string
//   fontStretch: string
//   lineHeight: string
//   padding: string
// }>

type CloudStyle = Partial<{
  fill: string
  stroke: string
  strokeWidth: number
}>

type CloudLetterProps = {
  children: JSX.Element | string | (string | JSX.Element)[] | null
  width: number
  spaceWidth: number
  align?: "left" | "center" | "right"
  // wordStyle?: CSSWordProperties
  cloudStyle?: CloudStyle
  mode?: "WORD" | "SPACE"
}

type Point = [ number, number ]
type CloudRect = [[ Point, Point, Point, Point ]]

type CloudCanvasProps = {
  width: number
  height: number
  align: "left" | "center" | "right"
  cloudRects: CloudRect[]
  cloudStyle?: CloudStyle
}

export {
  type CloudWordProps,
  type CloudLetterProps,
  type CloudRect,
  type CloudCanvasProps,
}