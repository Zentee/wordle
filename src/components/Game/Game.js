import { useState, React } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [savedAnswer, setSavedAnswer] = useState(sample(WORDS));

  console.log(savedAnswer);

  function handleNewGame() {
    setSavedAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessInput answer={savedAnswer} onNewGame={handleNewGame} />
    </>
  );
}

export default Game;
