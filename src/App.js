import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🐷": " Pig Face",
  "🥰": "Smiling Face with Hearts",
  "☹": "Frowning Face",
  "🏫": "School",
  "🍦": "Soft Ice Cream",
  "❤️": "Love",
  "😊": "Smiling Face with Smiling Eyes"
};

// converting object into array
// console.log(Object.keys(emojiDictionary));

// we got array
const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    //processing
    let userInput = event.target.value;

    // let meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]); //reactcall to show output
    } else {
      setMeaning(`we don't have this in our database`);
    }
  };

    //processing
  const listClickHandler = (item) => { 
    console.log(item);
    setMeaning(emojiDictionary[item]);
  };



  let emojis = emojisWeKnow.map((item, index) => {
    // console.log(item);
    return (
      <li onClick={() => listClickHandler(item)} key={index}>
        {item}
      </li>
    );
  });


  return (
    <div className="App">
      <h1>inside out</h1>
      <input placeholder="put an emoji here" onChange={emojiInputHandler} />
      <h2> {meaning} </h2> 
      {/* actual output set by react using usestate */}
      <h3> emojis we know</h3>
      {<ul>{emojis}</ul>}
    </div>
  );
}

// VISER :- View --> Interact --> State in Event handler --> React to it /Render
