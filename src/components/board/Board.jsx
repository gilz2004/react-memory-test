import React from "react";
import { colors } from "../../utils/colors";
import Bulb from "../bulb/Bulb";
import { boardStyle } from "./board.styles";

export default function Board({ bulbClickHandle, flashColor }) {
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
