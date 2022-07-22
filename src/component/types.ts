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
// }>



type Mode = "WORD" | "SPACE" | "PARTIAL"
type Align = "left" | "center" | "right"

type CloudLetterProps = {
  children: JSX.Element | string | (string | JSX.Element)[] | null
  width: number
  spaceWidth: number
  cloudHeight: number
  padding?: number

  mode?: Mode
  align?: Align
  snap?: number
  grid?: boolean
  // wordStyle?: CSSWordProperties
  fill?: string
  stroke?: string
  strokeWidth?: number
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowColor?: string
}

type Point = [ number, number ]
type CloudRect = [[ Point, Point, Point, Point ]]

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
  type CloudContext,
}