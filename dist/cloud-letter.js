import React from "react"
import { CloudParagraph } from "./cloud-paragraph"
import { CloudContextProvider } from "./context"
export const CloudLetter = ({ children, ...props }) => (React.createElement(CloudContextProvider, null, React.createElement(CloudParagraph, { ...props }, children)))
//# sourceMappingURL=cloud-letter.js.map