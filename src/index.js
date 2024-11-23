import { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App";


//import BrowserRouter
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDom

root.render(
  <StrictMode>
    <Router>
      <App/>
    </Router>
  </StrictMode>,
  document.getElementById("root")
)