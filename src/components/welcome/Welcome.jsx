import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Welcome() {
  const { setUsername, handleStartGame } = useContext(GlobalContext);
  const [username, setUserName] = useState("");
  const [err, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setError("please enter username");
      return;
    }

    setUsername(username);
    handleStartGame();
  };

  const handleChange = (e) => {
    setError("");
    setUserName(e.target.value);
  };

  return (
    <div style={welcomeStyle}>
      <h1 style={welcomeText}>memory training game is ahead </h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label
            style={{
              color: err ? "red" : "black",
              marginRight: "10px",
            }}
          >
            Enter user name
          </label>
          <input
            style={inputStyle}
            placeholder={"username goes here..."}
            value={username}
            onChange={handleChange}
          />
        </div>
        <div style={btnBoxStyle}>
          <button style={btnStyle} type="submit">
            start
          </button>
        </div>
      </form>
    </div>
  );
}

const welcomeStyle = {
  gridGap: "10px",
  width: "50%",

  height: "100vh",
  margin: "10px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const welcomeText = {
  fontSize: "30px",
  padding: "0",
  margin: "0",
};

const formStyle = {
  display: "flex",
  gridGap: "10px",
  flexDirection: "column",
};

const inputStyle = {
  padding: "5px",
  borderRadius: "5px",
  border: "1px solid gray",
};

const btnBoxStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "5px",
};

const btnStyle = {
  cursor: "pointer",
  background: "none",
  fontSize: "1.2rem",
  padding: "5px",
  width: "50%",
};
