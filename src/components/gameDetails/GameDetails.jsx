import React from "react";

export default function GameDetails({ score, userDate, username }) {
  let dateFormat = `${userDate.getDate()}/${
    userDate.getMonth() + 1
  }/${userDate.getFullYear()}`;
  let timeFormat = `${userDate.getHours()}:${userDate.getMinutes()}`;
  return (
    <div style={gameDetailsStyle}>
      <h3 style={scoreBarStyle}>Game Details</h3>
      <p>
        current player: <span style={usernameStyle}>{username}</span>
      </p>
      <p>start date {dateFormat}</p>
      <p>start time {timeFormat}</p>
      <div>current score: {score}</div>
    </div>
  );
}

const scoreBarStyle = { marginTop: "5px" };
const gameDetailsStyle = {
  textAlign: "center",
};
const usernameStyle = {
  fontSize: "1.1em",
  textDecoration: "underline",
  fontWeight: "600",
};
