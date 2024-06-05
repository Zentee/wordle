import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

export default function GuessInput({ answer, onNewGame }) {
  const [textInput, setTextInput] = useState("");
  const [savedInput, setSavedInput] = useState([]);

  const maxGuess = NUM_OF_GUESSES_ALLOWED;
  let won = false;
  let isNewGame = false;

  function handleSubmit(event) {
    event.preventDefault();
    if (savedInput.length === maxGuess) return;
    if (textInput.length !== 5) return setTextInput("");
    let upperCaseString = textInput.toUpperCase();
    setSavedInput((prevInput) => [...prevInput, upperCaseString]);
    setTextInput("");
  }

  function handleRestart() {
    setTextInput("");
    setSavedInput([]);
    onNewGame();
    isNewGame = false;
  }

  if (savedInput.includes(answer)) {
    won = true;
  }

  if (savedInput.length === maxGuess) {
    isNewGame = true;
  }

  return (
    <>
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
          disabled={isNewGame}
          onChange={(event) => setTextInput(event.target.value)}
          type="text"
        />
      </form>
      {won && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      {isNewGame && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button class="restart" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </>
  );
}
