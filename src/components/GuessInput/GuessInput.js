import { useState } from "react";
import PreviousGuess from "../PreviousGuess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

export default function GuessInput({ answer }) {
  const [textInput, setTextInput] = useState("");
  const [savedInput, setSavedInput] = useState([]);
  const maxGuess = NUM_OF_GUESSES_ALLOWED;

  // this will print the current answer
  console.log(answer);
  console.log(savedInput);

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
      <Guess savedInput={savedInput} />
      {/*       {savedInput.map((ele) => {
        return (
          <PreviousGuess key={Math.random() * 1000} previousGuessArray={ele} />
        );
      })} */}
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
