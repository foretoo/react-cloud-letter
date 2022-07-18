import { FormEvent, useState } from "react"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text1, text2 } from "./component/text"

const width = window.innerWidth
const mineText = "Initial  Text   For Cloudy  Lettering"

export const App = () => {

  const [ content, setContent ] = useState(text2)

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    setContent(target.value)
  }

  return (
    <>
      <CloudLetter width={Math.min(width*0.8, 1024)} spaceWidth={40} >
        {content}
        {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
      </CloudLetter>
      <textarea
        rows={7}
        cols={Math.min(width/15|0, 55)}
        value={content}
        autoFocus={true}
        onInput={handleInput}
      />
    </>
  )
}