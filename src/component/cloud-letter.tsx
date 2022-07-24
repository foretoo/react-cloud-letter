import React from "react"
import { CloudParagraph } from "./cloud-paragraph"
import { CloudContextProvider } from "./context"
import { CloudLetterProps } from "./types"

export const CloudLetter = (
  {
    children,
    ...props
  }: CloudLetterProps
) => {
  return (
    <CloudContextProvider>
      <CloudParagraph {...props} >
        { children }
      </CloudParagraph>
    </CloudContextProvider>
  )
}