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
};

const App = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState(messages.start);
  const [winnerStyle, setWinnerStyle] = useState("#222");

  const handleCheck = () => {
    if (!guess) {
      setMessage(messages.input);
    } else if (guess === randomNumber) {
      setMessage(messages.correct);
      setWinnerStyle("green");
    } else if (guess > randomNumber) {
      setMessage(messages.high);
    } else if (guess < randomNumber) {
      setMessage(messages.low);
    }
  };

  return (
    <div style={{ background: winnerStyle }}>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
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
            💯 Score: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">0</span>
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
