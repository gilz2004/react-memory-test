import React from "react";

export default function Header({ userName, handleGameReset, gameOver }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{`Welcome ${userName} `}</h1>
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
