import { FormEvent, useState } from "react"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text1, text2 } from "./text"

const width = window.innerWidth
const mineText = "The ${origin} of the term ${\"cloud\"} can be ${found} in ${the Old English} words clud or clod, meaning a hill or a mass of stone."
// "The $origin$ of the term \"cloud\" can be $found$ in $the Old English$ words clud or clod, meaning a hill or a mass of stone."

type Mode = "WORD" | "SPACE" | "PARTIAL"
type Align = "left" | "center" | "right"

export const App = () => {

  const [ content, setContent ] = useState(mineText)
  const [ mode, setMode ] = useState<Mode>("PARTIAL")
  const [ align, setAlign ] = useState<Align>("center")
  const [ spaceWidth, setSpaceWidth ] = useState(0)
  const [ cloudHeight, setCloudHeight ] = useState(33)
  const [ padding, setPadding ] = useState(16)
  const [ snap, setSnap ] = useState(1)
  const [ grid, setGrid ] = useState(false)
  const [ fill, setFill ] = useState("#ffffff")
  const [ stroke, setStroke ] = useState("#1A66A1")
  const [ shadowOffset, setShadowOffset ] = useState({ x: -20, y: 20 })

    

  return (
    <>
      <CloudLetter
        width={Math.min(width * 0.8, 512)}
        spaceWidth={spaceWidth}
        cloudHeight={cloudHeight}
        font={{
          color: stroke,
          family: "Poppins",
          size: 16
        }}
        padding={padding}

        align={align}
        mode={mode}
        snap={snap}
        grid={grid}

        fill={fill}
        stroke={stroke}
        shadowOffsetX={shadowOffset.x}
        shadowOffsetY={shadowOffset.y}
      >
        {content}
        {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
      </CloudLetter>

      <form className="controls">
        <fieldset className="controls-row content">
          <span>content:</span>
          <textarea
            rows={3}
            cols={Math.min(Math.max(42, width / 25 | 0), 55)}
            value={content}
            onInput={(e) => setContent((e.target as HTMLTextAreaElement).value)}
          />
        </fieldset>

        <fieldset className="controls-row view">
          <span>view:</span>
          <label>
            fill
            <div className="hidder">
              <input
                type="color"
                value={fill}
                onChange={(e) => setFill((e.target as HTMLInputElement).value)}
              />
            </div>
          </label>
          <label>
            stroke
            <div className="hidder">
              <input
                type="color"
                value={stroke}
                onChange={(e) => setStroke((e.target as HTMLInputElement).value)}
              />
            </div>
          </label>
          <span className="shadow-label">shadow:</span>
          <label>
            x
            <input
              type="number"
              value={shadowOffset.x}
              min={-20}
              max={20}
              onChange={(e) => setShadowOffset((prev) => ({ x: +e.target.value, y: prev.y }))}
            />
          </label>
          <label>
            y
            <input
              type="number"
              value={shadowOffset.y}
              min={-20}
              max={20}
              onChange={(e) => setShadowOffset((prev) => ({ y: +e.target.value, x: prev.x }))}
            />
          </label>
        </fieldset>

        <fieldset className="controls-row mode">
          <span>mode:</span>
          <label>
            <input
              type="radio"
              name="mode"
              value="WORD"
              checked={mode === "WORD"}
              onChange={(e) => setMode((e.target as HTMLInputElement).value as Mode)}
            />
            WORD
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="PARTIAL"
              checked={mode === "PARTIAL"}
              onChange={(e) => setMode((e.target as HTMLInputElement).value as Mode)}
            />
            PARTIAL
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="SPACE"
              checked={mode === "SPACE"}
              onChange={(e) => setMode((e.target as HTMLInputElement).value as Mode)}
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
              onChange={(e) => setAlign((e.target as HTMLInputElement).value as Align)}
            />
            left
          </label>
          <label>
            <input
              type="radio"
              name="align"
              value="center"
              checked={align === "center"}
              onChange={(e) => setAlign((e.target as HTMLInputElement).value as Align)}
            />
            center
          </label>
          <label>
            <input
              type="radio"
              name="align"
              value="right"
              checked={align === "right"}
              onChange={(e) => setAlign((e.target as HTMLInputElement).value as Align)}
            />
            right
          </label>
        </fieldset>

        <fieldset className="controls-row clouds">
          <span>cloud's:</span>
          <div>
            <label>
              height
              <input
                type="range"
                min={20}
                max={50}
                step={1}
                value={cloudHeight}
                onInput={(e) => setCloudHeight(+(e.target as HTMLInputElement).value)}
              />
            </label>
            <label>
              width
              <input
                type="range"
                min={0}
                max={50}
                step={1}
                value={padding}
                onInput={(e) => setPadding(+(e.target as HTMLInputElement).value)}
              />
            </label>
            <label>
              space between
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={spaceWidth}
                onInput={(e) => setSpaceWidth(+(e.target as HTMLInputElement).value)}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="controls-row snap">
          <span>snap: </span>
          <label className="snap">
            cloudHeight  /
            <input
              type="number"
              value={snap}
              onChange={(e) => setSnap(+(e.target as HTMLInputElement).value)}
            />
          </label>
          <label className="grid">
            <span style={{ color: snap ? "black" : "grey" }}>, grid</span>
            <input
              type="checkbox"
              disabled={!snap}
              checked={grid}
              onChange={() => setGrid((prev) => !prev)}
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