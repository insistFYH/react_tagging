import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ReactDOM.render(<App />, document.getElementById("test"));仅支持17以前
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);
