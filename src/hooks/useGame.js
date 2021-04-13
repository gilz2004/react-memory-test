import { useCallback, useEffect, useState } from "react";
import { colors } from "../utils/colors";
import { makeRandomNumber } from "../utils/utils";

const totalBulbs = 6;
const roundSuccessScore = 10;

export default function useGame(gameInit) {
  const [gameOn, setGameOn] = useState(false);
  const [play, setPlay] = useState(gameInit);
  const [flashColor, setFlashColor] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const { userColors, userPicksMode, displayMode, score } = play;

  const displayColors = useCallback(async () => {
    await timeout(1500);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(1000);
      setFlashColor("");
      if (i === play.colors.length - 1) {
        setPlay({
          ...play,
          displayMode: false,
          userPicksMode: true,
          userColors: [...play.colors],
        });
      }
    }
  }, [play]);

  useEffect(() => {
    if (gameOn && displayMode) {
      let randomNumber = makeRandomNumber(totalBulbs);
      let newColor = colors[randomNumber];
      setPlay((prevPlay) => ({
        ...prevPlay,
        colors: [...prevPlay.colors, newColor],
      }));
    }
  }, [gameOn, displayMode, gameOver]);

  useEffect(() => {
    if (displayMode && colors.length) {
      displayColors();
    }
  }, [displayMode, play.colors.length, displayColors]);

  const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleStartGame = () => {
    setPlay({ ...play, displayMode: true });
    setGameOn(true);
  };

  const handleGameReset = () => {
    setPlay({ ...gameInit, displayMode: true });
    setGameOver(false);
    setGameOn(true);
  };
  const bulbClickHandle = async (color) => {
    if (!displayMode && userPicksMode) {
      const copyUserColors = [...userColors];
      const lastColor = copyUserColors.shift();
      setFlashColor(color);

      await timeout(1000);
      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({
            ...play,
            userColors: copyUserColors,
          });
        } else {
          await timeout(1000);
          setPlay({
            ...play,
            displayMode: true,
            userPicksMode: false,
            userColors: [],
            score: score + roundSuccessScore,
          });
        }
      } else {
        setGameOn(false);
        setGameOver(true);
      }
      setFlashColor("");
    }
  };
  return {
    bulbClickHandle,
    handleStartGame,
    play,
    flashColor,
    handleGameReset,
    gameOver,
  };
}
