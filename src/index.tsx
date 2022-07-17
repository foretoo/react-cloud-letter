import ReactDOM from "react-dom/client"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text } from "./component/text"
import "./index.sass"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const width = window.innerWidth

root.render(
  <CloudLetter width={`${width/2|0}px`} spaceWidth="40px">
    {text}
    {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
  </CloudLetter>
)