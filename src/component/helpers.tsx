import { CloudSpace } from "./cloud-space"
import { CloudWord } from "./cloud-word"



export const getCloudMapper = (
  modeIsWord: boolean
) => (
  element: string, i: number | string,
) => {
  return element.match(/\n/g)
    ? <br key={`${i}-break`} />
    : element === " "
      ? <CloudSpace key={`${i}-space`}/>
      : <CloudWord key={`${i}-${element}`} idle={!modeIsWord} >{element}</CloudWord>
}



export const split = (str: string) => str.split(/(\s)/).filter(Boolean)