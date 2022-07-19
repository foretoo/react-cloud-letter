import { createContext } from "react"
import { CloudContext } from "./types"

const init = {
  every: [],
  words: [],
  spaces: [],
} as CloudContext

export const cloudContext = createContext<CloudContext>(init)