import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // state
  const [likeCounter, setLikeCounter] = useState(0);

  // SE(VISER)
  const likeClickHandler = () => {
    let newLikeCounterValue = likeCounter + 1; //processing
    setLikeCounter(newLikeCounterValue); //processing/output
    // passing the new value as arg to setlikecounter
  };

  // now it is in view ???
  // we can use it in return
  console.log("liked", likeCounter);

  // viewV
  // it is the view whcih is user at the end is seeing, nd not wht else  ure doing in code
  return (
    <div className="App">
      <h1>inside out</h1>
      {/* click on btn is input(interacting with react) */}
      {/* ONcLIKC IS interact with aview */}
      <button onClick={likeClickHandler}>Like Me </button> 
      {/* R */}
       {likeCounter}
    </div>
  );
}

// wanted counter value to be in view so saving it as state value

// whtever u put in view can be taken up by model (whcih is data part(ie state thing)) and controller is the processpr like likehandler

// VISER :- View --> Interact --> State in Event handler --> React to it /Render 