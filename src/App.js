import React, { useState } from "react";
import "./styles.css";

export default function App() {
 
const [inputValue, setInputValue] = useState('')
 
  
const inputChangedHandler = (event) => {
  // console.log(event.target)

  // console.log(event.target.value)
  setInputValue(event.target.value)
}

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={inputChangedHandler} />

      <div>Welcome {inputValue} </div>
    </div>
  );
}


// VISER :- View --> Interact --> State in Event handler --> React to it /Render 