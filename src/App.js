import React from "react";
import "./styles.css";


let likeCounter = 0;
// we cant make this value to be in view
let l = 0;

export default function App() {

  const likeClickHandler = () => {
    likeCounter++; //processing
    console.log("liked " , likeCounter); //output
    l = likeCounter
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      {/* click on btn is input(interacting with react) */}
      <button onClick={likeClickHandler}>Like Me </button> {l} 
    </div>
  );
}
