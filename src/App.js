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
  '😊' : 'Smiling Face with Smiling Eyes'
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;

    // let meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    }else {
      setMeaning(`we don't have this in our database`

      );

      // meaning = `we don't have this in our database`

    }

    // if (meaning === undefined) {
    //   meaning = `we don't have this in our database`
    // }

    // // setInputValue(event.target.value)
    // // console.log(meaning);
    // setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>inside out</h1>
      <input placeholder="put an emoji here" onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
    </div>
  );
}

// VISER :- View --> Interact --> State in Event handler --> React to it /Render
