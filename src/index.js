import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import Providers from "../src/redux/provider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Providers>
    <App />
  </Providers>
);
