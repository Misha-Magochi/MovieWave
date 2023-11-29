import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./components/app/App";
=======
import AppRouter from "./components/app/App-router";
>>>>>>> feature-movieHomePage
import Providers from "../src/redux/provider";
import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Providers>
    <Router>
<<<<<<< HEAD
      <App />
=======
      <AppRouter />
>>>>>>> feature-movieHomePage
    </Router>
  </Providers>
);
