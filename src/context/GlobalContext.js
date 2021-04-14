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
  const [userDate, setUserDate] = useState(new Date());

  const {
    bulbClickHandle,
    handleStartGame,
    play,
    flashColor,
    gameOver,
    handleGameReset,
  } = useGame(gameInit, username);

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
        userDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
