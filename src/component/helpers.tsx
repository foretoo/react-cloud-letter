import { CloudWordProps } from "./types"
import { CloudWord } from "./cloud-word"
import { CloudSpace } from "./cloud-space"
import { CloudWordIdle } from "./cloud-word-idle"



const getElement = (
  Component: (props: CloudWordProps) => JSX.Element
) => (
  element: string, i: number
) => (
  element === " "
    ? <CloudSpace key={`${i}-$space`}/>
    : <Component key={`${i}-${element}`}>{element}</Component>
)

export const WordOrSpace = getElement(CloudWord)
export const IdleOrSpace = getElement(CloudWordIdle)



export const split = (str: string) => str.split(/(\s)/).filter(Boolean)