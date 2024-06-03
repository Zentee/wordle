import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

export default function Guess({ answer, savedInput }) {
  const maxGuess = NUM_OF_GUESSES_ALLOWED;

  // The saved status can only have the status if it has content if not it's just empty.

  let wordTest = range(0, maxGuess).map((firstEle) => {
    const word = savedInput[firstEle] || "";
    let guessResults = word ? checkGuess(word, answer) : [];

    return (
      <p key={Math.random() * 2} class="guess">
        {range(0, maxGuess - 1).map((ele) => {
          const letter = word[ele];
          const status = guessResults[ele]?.status || "";
          return (
            <span key={Math.random() * 2} class={`cell ${status}`}>
              {letter}
            </span>
          );
        })}
      </p>
    );
  });

  return <div class="guess-results">{wordTest}</div>;
}
