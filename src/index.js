import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import Providers from "../src/redux/provider";
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Providers>
    <Router>
    <App />
    </Router>
  </Providers>
);
