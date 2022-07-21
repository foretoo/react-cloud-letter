type CloudWordProps = {
  children: string
  idle?: boolean
}
type SpanRef = HTMLSpanElement & { idle: boolean }

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



type Mode = "WORD" | "SPACE"
type Align = "left" | "center" | "right"

type CloudLetterProps = {
  children: JSX.Element | string | (string | JSX.Element)[] | null
  width: number
  spaceWidth: number
  cloudHeight: number
  align?: Align
  snap?: number
  grid?: boolean
  // wordStyle?: CSSWordProperties
  fill?: string
  stroke?: string
  strokeWidth?: number
  mode?: Mode
}

type Point = [ number, number ]
type CloudRect = [[ Point, Point, Point, Point ]]

type CloudCanvasProps = {
  width: number
  height: number
  cloudHeight: number
  align: Align
  cloudRects: CloudRect[]
  fill: string
  stroke: string
  strokeWidth: number
  snap: number
  grid: boolean
}

type CloudContext = {
  every: SpanRef[]
  words: SpanRef[]
  spaces: SpanRef[]
}

export {
  type SpanRef,
  type Mode,
  type Align,
  type CloudWordProps,
  type CloudLetterProps,
  type CloudRect,
  type CloudCanvasProps,
  type CloudContext,
}