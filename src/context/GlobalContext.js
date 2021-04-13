import React, { createContext, useState } from "react";
import useGame from "../hooks/useGame";

export const GlobalContext = createContext();

const gameInit = {
  displayMode: false,
  colors: [],
  score: 0,
  userPicksMode: false,
};

export default function GameContext({ children }) {
  const [username, setUsername] = useState("");
  const {
    bulbClickHandle,
    handleStartGame,
    play,
    flashColor,
    gameOver,
    handleGameReset,
  } = useGame(gameInit);
  return (
    <GlobalContext.Provider
      value={{
        bulbClickHandle,
        handleStartGame,
        play,
        flashColor,
        gameOver,
        handleGameReset,
        username,
        setUsername,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
