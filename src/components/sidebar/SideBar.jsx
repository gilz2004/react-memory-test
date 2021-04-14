import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import GameDetails from "../gameDetails/GameDetails";

export default function SideBar() {
  const {
    play: { score },
    userDate,
    username,
  } = useContext(GlobalContext);
  const [userStorageData] = useLocalStorage();

  return (
    <div style={sideBarStyle}>
      <GameDetails score={score} userDate={userDate} username={username} />

      <ul style={ulStyle}>best ever</ul>
      {userStorageData
        .sort((a, b) => b.score - a.score)
        .map((prevUserScore, index) => {
          return (
            <li style={liStyle} key={index}>
              {`${prevUserScore.username} score:${prevUserScore.score}`}
            </li>
          );
        })}
    </div>
  );
}

const sideBarStyle = {
  height: "90vh",
  border: "2px solid black",
  borderRadius: "8px",
  width: "220px",
  overflowY: "scroll",
  maxHeight: "300px",
  padding: "5px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ulStyle = {
  padding: 0,
  textDecoration: "underline",
  fontSize: "1.2em",
  marginBottom: "5px",
};

const liStyle = {
  listStyle: "none",
  marginBottom: "5px",
};
