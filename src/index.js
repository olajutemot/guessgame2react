import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { useState } from "react";
const messages = {
  start: "Start guessing...",
  input: "invalid Number",
  high: "too High",
  low: "too low",
  correct: "you are correct",
  lose: "Game Over",
};

const App = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState(messages.start);
  const [winnerStyle, setWinnerStyle] = useState(false);
  const [loserStyle, setLoserStyle] = useState(false);
  const [score, setScore] = useState(20);
  const [highscore, setHighScore] = useState(0);

  const handleCheck = () => {
    if (!guess) {
      setMessage(messages.input);
    } else if (guess === randomNumber) {
      setMessage(messages.correct);
      setWinnerStyle(true);
      setHighScore(score);
    } else if (guess !== randomNumber) {
      if (score > 1) {
        setMessage(guess > randomNumber ? messages.high : messages.low);
        setScore((score) => score - 1);
      } else {
        setScore(0);
        setMessage(messages.lose);
        setLoserStyle(true);
      }
    }
  };

  const handleReset = () => {
    setGuess("");
    setWinnerStyle(false);
    setMessage(messages.start);
    setScore(20);
    setHighScore(score);
    setRandomNumber(Math.trunc(Math.random() * 20) + 1);
  };

  return (
    <div
      style={{
        background: `${
          winnerStyle ? "green" : "#222" && loserStyle ? "red" : "#222"
        }`,
      }}
    >
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleReset}>
          Again!
        </button>
        <div className="number">{winnerStyle ? randomNumber : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input
            type="number"
            className="guess"
            value={guess}
            onChange={(e) => setGuess(parseInt(e.target.value))}
          />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">
            {message}
            {randomNumber}{" "}
          </p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
