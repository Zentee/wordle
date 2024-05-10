import { useState } from "react";
import PreviousGuess from "../PreviousGuess";

export default function GuessInput({ answer }) {
  const [textInput, setTextInput] = useState("");
  const [savedInput, setSavedInput] = useState([]);

  // this will print the current answer
  console.log(answer);

  function handleSubmit(event) {
    event.preventDefault();
    if (textInput.length !== 5) return setTextInput("");
    let upperCaseString = textInput.toUpperCase();
    setSavedInput((prevInput) => [...prevInput, upperCaseString]);
    setTextInput("");
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      {savedInput.map((ele) => {
        return (
          <PreviousGuess key={Math.random() * 1000} previousGuessArray={ele} />
        );
      })}
      <label for="guess-input">Enter guess: {textInput}</label>
      <input
        id="guess-input"
        value={textInput}
        minLength={5}
        maxLength={5}
        onChange={(event) => setTextInput(event.target.value)}
        type="text"
      />
    </form>
  );
}
