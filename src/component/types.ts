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
  children: JSX.Element | JSX.Element[] | string | null
  width: string
  spaceWidth: string
  fontStyle?: CSSFontProperties
}

type CloudData = {
  x: number
  y: number
  w: number
  h: number
}

export {
  type CloudWordProps,
  type CloudLetterProps,
  type CloudData,
}