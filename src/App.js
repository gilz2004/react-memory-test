import React, { useState } from "react";
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Welcome from "./components/welcome/Welcome";
import useGame from "./hooks/useGame";

const gameInit = {
  displayMode: false,
  colors: [],
  score: 0,
  userPicksMode: false,
};

export default function App() {
  const [userName, setNewUser] = useState("");

  const handleUserName = (userName) => setNewUser(userName);

  const {
    bulbClickHandle,
    handleStartGame,
    play,
    flashColor,
    gameOver,
    handleGameReset,
  } = useGame(gameInit);

  return !userName ? (
    <Welcome
      handleUserName={handleUserName}
      handleStartGame={handleStartGame}
    />
  ) : (
    <>
      <Header
        handleGameReset={handleGameReset}
        gameOver={gameOver}
        score={play.score}
        userName={userName}
      />
      <div
        style={{
          display: "flex",
          gridGap: "10px",
        }}
      >
        <SideBar score={play.score} />
        <Board bulbClickHandle={bulbClickHandle} flashColor={flashColor} />
      </div>
    </>
  );
}

// todo: add layout component

//todo : make global context state ,add user name as part of this context and the game logic
