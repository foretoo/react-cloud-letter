import { FormEvent, useState } from "react"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text1, text2 } from "./text"

const width = window.innerWidth
const mineText = "The ${origin} of the term ${\"cloud\"} can be ${found} in ${the Old English} words clud or clod, meaning a hill or a mass of stone."
// "The $origin$ of the term \"cloud\" can be $found$ in $the Old English$ words clud or clod, meaning a hill or a mass of stone."

export const App = () => {

  const [ content, setContent ] = useState(mineText)
  const [ mode, setMode ] = useState<"WORD" | "SPACE" | "PARTIAL">("PARTIAL")
  const [ align, setAlign ] = useState<"left" | "center" | "right">("center")
  const [ spaceWidth, setSpaceWidth ] = useState(4)
  const [ cloudHeight, setCloudHeight ] = useState(32)
  const [ snap, setSnap ] = useState(0)
  const [ grid, setGrid ] = useState(true)

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
  const handleSpaceWidthChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setSpaceWidth(+target.value)
  }
  const handleCloudHeightChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setCloudHeight(+target.value)
  }
  const handleSnapChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setSnap(+target.value)
  }

  return (
    <>
      <CloudLetter
        width={Math.min(width*0.8, 512)}
        spaceWidth={spaceWidth}
        cloudHeight={cloudHeight}
        align={align}
        mode={mode}
        snap={snap}
        grid={grid}
      >
        {content}
        {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
      </CloudLetter>

      <form className="controls">
        <fieldset className="controls-row content">
          <span>content:</span>
          <textarea
            rows={3}
            cols={Math.min(Math.max(42, width/25|0), 55)}
            value={content}
            onInput={handleInput}
          />
        </fieldset>

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
              value="PARTIAL"
              checked={mode === "PARTIAL"}
              onChange={handleModeChange}
            />
            PARTIAL
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

        <fieldset className="controls-row space-width">
          <span>space width</span>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={spaceWidth}
            onInput={handleSpaceWidthChange}
          />
        </fieldset>

        <fieldset className="controls-row cloud-height">
          <span>clouds height</span>
          <input
            type="range"
            min={20}
            max={50}
            step={1}
            value={cloudHeight}
            onInput={handleCloudHeightChange}
          />
        </fieldset>

        <fieldset className="controls-row snap">
          <span>snap: </span>
          <label className="snap">
            cloudHeight  / 
            <input
              type="number"
              value={snap}
              onChange={handleSnapChange}
            />
          </label>
          <label className="grid">
            <span style={{ color: snap ? "black" : "grey" }}>, grid</span>
            <input
              type="checkbox"
              disabled={!snap}
              checked={grid}
              onChange={() => setGrid(prev => !prev)}
            />
          </label>
        </fieldset>
      </form>
      <a
        className="repo-link"
        href="https://github.com/foretoo/cloud-letter"
      >
        github repo
      </a>
    </>
  )
}