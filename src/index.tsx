import ReactDOM from "react-dom/client"
import { CloudLetter, CloudWord } from "./component/cloud-letter"
import "./index.sass"

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <CloudLetter width="200px" spaceWidth="20px">
    Initial  <CloudWord>Text</CloudWord> <CloudWord>For</CloudWord> <CloudWord>Cloudy</CloudWord> Lettering
  </CloudLetter>
)