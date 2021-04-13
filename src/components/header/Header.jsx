import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Header() {
  const { username, handleGameReset, gameOver } = useContext(GlobalContext);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{`Welcome ${username} `}</h1>
      {gameOver ? <p style={gameOverStyle}>Game over </p> : null}
      <button style={btnStyle} onClick={handleGameReset}>
        start again
      </button>
    </div>
  );
}

const gameOverStyle = {
  color: "red",
  marginBottom: "10px",
  fontWeight: "600",
};

const btnStyle = {
  cursor: "pointer",
  borderRadius: "8px",
  padding: "3px",
  background: "none",
  marginBottom: "10px",
};
