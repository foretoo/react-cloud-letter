type CloudWordProps = {
  children: string
  idle?: boolean
}
type SpanRef = HTMLSpanElement & { idle: boolean }

type CSSFontProperties = {
  color: string
  family: string
  size: number
  style?: string
  variant?: string
  weight?: string
  stretch?: string
}



type Mode = "WORD" | "SPACE" | "PARTIAL"
type Align = "left" | "center" | "right"

type CloudLetterProps = {
  children: JSX.Element | string | (string | JSX.Element)[] | null
  width: number
  spaceWidth?: number
  cloudHeight?: number
  font?: CSSFontProperties
  padding?: number

  mode?: Mode
  align?: Align
  snap?: number
  grid?: boolean

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