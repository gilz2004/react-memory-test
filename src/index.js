import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GameContext from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GameContext>
      <App />
    </GameContext>
  </React.StrictMode>,
  document.getElementById("root")
);
