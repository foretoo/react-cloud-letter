import { FormEvent, useState } from "react"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text1, text2 } from "./component/text"

const width = window.innerWidth
const mineText = "The origin of the term \"cloud\" can be found in the Old English words clud or clod, meaning a hill or a mass of stone."

export const App = () => {

  const [ content, setContent ] = useState(mineText)
  const [ mode, setMode ] = useState<"WORD" | "SPACE">("WORD")
  const [ align, setAlign ] = useState<"left" | "center" | "right">("right")
  const [ spaceWidth, setSpaceWidth ] = useState(78)

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    setContent(target.value)
  }
  const handleModeChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setMode(target.value as "WORD" | "SPACE")
  }
  const handleAlignChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setAlign(target.value as "left" | "center" | "right")
  }
  const handleRangeChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setSpaceWidth(+target.value)
  }

  return (
    <>
      <CloudLetter
        width={Math.min(width*0.8, 512)}
        spaceWidth={spaceWidth}
        align={align}
        mode={mode}
      >
        {content}
        {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
      </CloudLetter>

      <form className="controls">
        <fieldset className="controls-row mode">
          <span>mode:</span>
          <label>
            <input
              type="radio"
              name="mode"
              value="WORD"
              checked={mode === "WORD"}
              onChange={handleModeChange}
            />
            WORD
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="SPACE"
              checked={mode === "SPACE"}
              onChange={handleModeChange}
            />
            SPACE
          </label>
        </fieldset>

        <fieldset className="controls-row align">
          <span>align:</span>
          <label>
            <input
              type="radio"
              name="align"
              value="left"
              checked={align === "left"}
              onChange={handleAlignChange}
            />
            left
          </label>
          <label>
            <input
              type="radio"
              name="align"
              value="center"
              checked={align === "center"}
              onChange={handleAlignChange}
            />
            center
          </label>
          <label>
            <input
              type="radio"
              name="align"
              value="right"
              checked={align === "right"}
              onChange={handleAlignChange}
            />
            right
          </label>
        </fieldset>

        <fieldset className="controls-row content">
          <span>content:</span>
          <textarea
            rows={3}
            cols={Math.min(width/25|0, 55)}
            value={content}
            autoFocus={true}
            onInput={handleInput}
          />
        </fieldset>

        <fieldset className="controls-row space-width">
          <span>space width</span>
          <input
            type="range"
            min={0}
            max={100}
            value={spaceWidth}
            onInput={handleRangeChange}
          />
        </fieldset>
      </form>
    </>
  )
}