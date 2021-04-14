import React from "react";

export default function Bulb({ color, onClick, flash }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        border: "2px solid black",
        borderRadius: "50%",
        background: flash ? color : "none",
        width: "100px",
        height: "100px",
      }}
    ></div>
  );
}
