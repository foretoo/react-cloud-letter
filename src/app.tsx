import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text } from "./component/text"

const width = window.innerWidth

export const App = () => {
  return (
    <CloudLetter width={width*0.9} spaceWidth={40} >
      {text}
      {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
      {/* Initial  Text   For Cloudy  Lettering */}
    </CloudLetter>
  )
}