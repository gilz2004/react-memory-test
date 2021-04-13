import { useEffect, useState } from "react";
import { makeRandomNumber } from "../utils/utils";

const totalBulbs = 6;
const roundSuccessScore = 10;

export default function useGame(colors, gameInit) {
  const [gameOn, setGameOn] = useState(false);
  const [play, setPlay] = useState(gameInit);
  const [flashColor, setFlashColor] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOn) {
      setPlay({ ...play, displayMode: true });
    } else {
      setPlay(play);
    }
  }, [gameOn, gameOver]);

  useEffect(() => {
    if (gameOn && play.displayMode) {
      let randomNumber = makeRandomNumber(totalBulbs);
      let newColor = colors[randomNumber];
      setPlay({ ...play, colors: [...play.colors, newColor] });
    }
  }, [gameOn, play.displayMode]);

  useEffect(() => {
    if (gameOn && play.displayMode && play.colors.length) {
      displayColors();
    }
  }, [gameOn, play.displayMode, play.colors.length]);

  const displayColors = async () => {
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
  };

  const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleStartGame = () => setGameOn(true);

  const handleGameReset = () => {
    setPlay(gameInit);
    setGameOver(false);
    setGameOn(true);
  };
  const bulbClickHandle = async (color) => {
    if (!play.displayMode && play.userPicksMode) {
      const copyUserColors = [...play.userColors];
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
            score: play.score + roundSuccessScore,
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
