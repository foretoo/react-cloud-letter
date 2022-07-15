type CloudWordProps = {
  children: string
}

type CSSFontProperties = Partial<{
  font: string
  fontFamily: string
  fontSize: string
  fontStyle: string
  fontVariant: string
  fontWeight: string
  fontStretch: string
  lineHeight: string
}>

type CloudLetterProps = {
  children: JSX.Element | string | (string | JSX.Element)[] | null
  width: string
  spaceWidth: string
  fontStyle?: CSSFontProperties
}

type Point = [ number, number ]
type CloudRect = [[ Point, Point, Point, Point ]]

type CloudCanvasProps = {
  width: number
  height: number
  cloudRects: CloudRect[]
}

export {
  type CloudWordProps,
  type CloudLetterProps,
  type CloudRect,
  type CloudCanvasProps,
}