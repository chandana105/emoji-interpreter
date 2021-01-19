import React, { useState } from "react";
import "./styles.css";

let shoppingList = ["milk", "eggs", "bread", "flowers", "colors", "dress"];
let userName = "chandana";
let userLoggedIn = true;

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

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;

    // let meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning(`we don't have this in our database`);

      // meaning = `we don't have this in our database`
    }

    // if (meaning === undefined) {
    //   meaning = `we don't have this in our database`
    // }

    // // setInputValue(event.target.value)
    // // console.log(meaning);
    // setMeaning(meaning);
  };

  // conditional rendering in jsx
  const getUserMessage = () => {
    if (userLoggedIn) {
      return <em> {userName} </em>;
    } else {
      return "user";
    }
  };

  const inStyle = (index) => {
    if (index % 2) {
      return { backgroundColor: "white" };
    } else {
      return { backgroundColor: "silver" };
    }
  };

  let list = shoppingList.map((item, index) => {
    // console.log(item);

    return (
      <li style={inStyle(index)} key={index}>
        {item}
      </li>
    );
  });

  return (
    <div className="App">
      <h1>inside out</h1>
      <input placeholder="put an emoji here" onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> list</h3>
      {<ol>{list}</ol>}
      <h4>Welcome {getUserMessage()}</h4>
    </div>
  );
}

// VISER :- View --> Interact --> State in Event handler --> React to it /Render

// for (var i =0; i < shoppingList.length; i++) {
// shoppingList[i]
// }
