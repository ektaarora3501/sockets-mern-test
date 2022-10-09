/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { io } from "socket.io-client";
import React, { useState } from "react";

const socket = io("http://localhost:8000");

function App() {
  console.log("Here --------");
  const [color, setColor] = useState("black");
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log(`You connected with the id ${socket.id}`);
      socket.on("data", (message) => {
        console.log(message);
        changeColor(message);
      });
    });
  }, []);

  const changeColor = (message) => {
    setColor(message);
  };

  return (
    <div
      className="App"
      style={{
        color: color,
        fontWeight:"bolder",
        marginTop: "25%",
      }}
    >
      Hey this is a random test app created by me to check sockets in a diff
      manner
    </div>
  );
}

export default App;
