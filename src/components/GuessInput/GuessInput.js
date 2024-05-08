import react, { useState } from "react";

export default function GuessInput({ answer }) {
  const [textInput, setTextInput] = useState("");

  // this will print the current answer
  console.log(answer);

  function handleSubmit(event) {
    event.preventDefault();
    if (textInput.length !== 5) return setTextInput("");
    let upperCaseString = textInput.toUpperCase();
    console.log(upperCaseString);

    setTextInput("");
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess: {textInput}</label>
      <input
        id="guess-input"
        value={textInput}
        onChange={(event) => setTextInput(event.target.value)}
        type="text"
      />
    </form>
  );
}
