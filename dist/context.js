import React, { createContext, useRef } from "react"
export const CloudContext = createContext({})
export const CloudContextProvider = ({ children }) => {
  const everyRef = useRef([])
  const wordsRef = useRef([])
  const spacesRef = useRef([])
  return (React.createElement(CloudContext.Provider, {
    value: {
      every: everyRef.current,
      words: wordsRef.current,
      spaces: spacesRef.current,
    },
  }, children))
}
//# sourceMappingURL=context.js.map