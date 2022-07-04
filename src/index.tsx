import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import "./styles/css/main.css";

const App = () => (
  <div className="container">
    <AppRouter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
