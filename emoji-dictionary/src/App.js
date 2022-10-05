import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "👍": "Thumbs Up",
  "🤔": "Thinking Face",
  "🥲": "Smiling Face with Tear",
  "🥺": "Pleading Face with Tears of Joy"
};
var emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We odn't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
 <h1>Emoji Dictionary</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning} </h2>
      <h3>Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            style={{ fontSize: "2rem", padding: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
