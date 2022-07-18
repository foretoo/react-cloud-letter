import ReactDOM from "react-dom/client"
import { App } from "./app"
import "./index.sass"

const root = ReactDOM.createRoot(document.getElementById("root")!)

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear())
}

root.render(<App />)