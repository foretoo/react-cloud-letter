import React, { createContext, PropsWithChildren, useRef } from "react"
import { ICloudContext, SpanRef } from "./types"



export const CloudContext = createContext<ICloudContext>({} as ICloudContext)

export const CloudContextProvider = (
  { children }: PropsWithChildren
) => {

  const everyRef = useRef<SpanRef[]>([])
  const wordsRef = useRef<SpanRef[]>([])
  const spacesRef = useRef<SpanRef[]>([])
  return (
    <CloudContext.Provider
      value={{
        every: everyRef.current,
        words: wordsRef.current,
        spaces: spacesRef.current,
      }}
    >
      {children}
    </CloudContext.Provider>
  )
}