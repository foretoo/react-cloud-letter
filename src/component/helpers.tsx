import { CloudWordProps } from "./types"



export const elementSetter = (
  WordComponent: (props: CloudWordProps) => JSX.Element,
  SpaceComponent: () => JSX.Element,
) => (
  element: string, i: number,
) => (
  element === " "
    ? <SpaceComponent key={`${i}-space`}/>
    : <WordComponent key={`${i}-${element}`}>{element}</WordComponent>
)



export const split = (str: string) => str.split(/(\s)/).filter(Boolean)