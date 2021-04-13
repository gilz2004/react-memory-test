import React, { useContext } from "react";
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Welcome from "./components/welcome/Welcome";
import { GlobalContext } from "./context/GlobalContext";

export default function App() {
  const { username, setUsername, handleStartGame } = useContext(GlobalContext);
  const handleUserName = (userName) => setUsername(userName);

  return !username ? (
    <Welcome
      handleUserName={handleUserName}
      handleStartGame={handleStartGame}
    />
  ) : (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          gridGap: "10px",
        }}
      >
        <SideBar />
        <Board />
      </div>
    </>
  );
}

// todo: add layout component

//todo : make global context state ,add user name as part of this context and the game logic
