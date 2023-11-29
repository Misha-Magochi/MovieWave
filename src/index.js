import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./components/app/App-router";
import Providers from "../src/redux/provider";
import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Providers>
    <Router>
      <AppRouter />
    </Router>
  </Providers>
);
