import React from "react";
import "./styles.css";

// its a jsx\
 

var userName =prompt("your name");
var color = "blue";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {userName}</h1>
    </div>
  );
}
