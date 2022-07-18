import ReactDOM from "react-dom/client"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import { text } from "./component/text"
import "./index.sass"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const width = window.innerWidth

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear())
}

root.render(
  <CloudLetter width={width*0.9} spaceWidth={40} align="left" cloudStyle={{ strokeWidth: 8.7 }} >
    {text}
    {/* Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering */}
    {/* Initial  Text   For Cloudy  Lettering */}
  </CloudLetter>
)