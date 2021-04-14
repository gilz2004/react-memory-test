import React, { useContext } from "react";
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Welcome from "./components/welcome/Welcome";
import { GlobalContext } from "./context/GlobalContext";

export default function App() {
  const { username } = useContext(GlobalContext);

  return !username ? (
    <Welcome />
  ) : (
    <>
      <Header />
      <div style={mainStyle}>
        <SideBar />
        <Board />
      </div>
    </>
  );
}

const mainStyle = {
  display: "flex",
  gridGap: "10px",
};
// todo: add layout component

//todo : make global context state ,add user name as part of this context and the game logic
