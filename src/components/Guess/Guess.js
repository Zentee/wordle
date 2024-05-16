import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

export default function Guess({ savedInput }) {
  const maxGuess = NUM_OF_GUESSES_ALLOWED;

  let wordTest = range(0, maxGuess).map((ele) => {
    const word = savedInput[ele];
    return (
      <p class="guess">
        {range(0, maxGuess - 1).map((ele) => {
          return (
            <span key={Math.random() * 2} class="cell">
              {word?.[ele]}
            </span>
          );
        })}
      </p>
    );
  });

  return <div class="guess-results">{wordTest}</div>;
}
