import React, { useState } from "react";
import "./styles.css";


export default function App() {


const [likeCounter, setLikeCounter] = useState(0);

  const likeClickHandler = () => {
    let newLikeCounterValue = likeCounter + 1; //processing
    setLikeCounter(newLikeCounterValue) //processing/output
    // passing the new value as arg to setlikecounter
  };

  // now it is in view ??? 
  // we can use it in return
  console.log('liked', likeCounter)

  return (
    <div className="App">
      <h1>inside out</h1>
      {/* click on btn is input(interacting with react) */}
      <button onClick={likeClickHandler}>Like Me </button> {likeCounter}
    </div>
  );
}

// wanted counter value to be in view so saving it as state value
