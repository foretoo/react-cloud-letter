import React from "react"
import ReactDOM from "react-dom/client"
import { CloudLetter } from "./component/cloud-letter"
import "./index.sass"

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <CloudLetter width="200px" spaceWidth="20px">
      Initial Text For Cloud Lettering
    </CloudLetter>
  </React.StrictMode>,
)