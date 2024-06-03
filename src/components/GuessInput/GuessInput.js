import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

export default function GuessInput({ answer }) {
  const [textInput, setTextInput] = useState("");
  const [savedInput, setSavedInput] = useState([]);
  const maxGuess = NUM_OF_GUESSES_ALLOWED;

  function handleSubmit(event) {
    event.preventDefault();
    if (savedInput.length === maxGuess) return;
    if (textInput.length !== 5) return setTextInput("");
    let upperCaseString = textInput.toUpperCase();
    setSavedInput((prevInput) => [...prevInput, upperCaseString]);
    setTextInput("");
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <Guess answer={answer} savedInput={savedInput} />
      <label for="guess-input">
        {savedInput.length > maxGuess ? "Enough Guesses." : "Enter guess:"}
      </label>
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
