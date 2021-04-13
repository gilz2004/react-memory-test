import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { colors } from "../../utils/colors";
import Bulb from "../bulb/Bulb";
import { boardStyle } from "./board.styles";

export default function Board() {
  const { flashColor, bulbClickHandle } = useContext(GlobalContext);
  return (
    <div style={boardStyle}>
      {colors &&
        colors.map((color, index) => {
          return (
            <Bulb
              onClick={() => bulbClickHandle(color)}
              key={index}
              color={colors[index]}
              flash={flashColor === color}
            />
          );
        })}
    </div>
  );
}
