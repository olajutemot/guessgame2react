import React, { useRef, useState } from "react";

const messages = {
  start: "Start guessing...",
  input: "input a number",
  high: "too High",
  low: "too low",
  correct: "you are correct",
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const Main = () => {
  const [message, setMessage] = useState(messages.start);

  const inputRef = useRef("");
  let inputValue = inputRef.current.value;
  // console.log(inputValue);

  const handleCheck = () => {
    if (!inputValue) {
      setMessage(messages.input);
    } else if (inputValue === secretNumber) {
      setMessage(messages.correct);
    } else if (inputValue > secretNumber) {
      setMessage(messages.high);
    } else if (inputValue < secretNumber) {
      setMessage(messages.low);
    }
  };

  return (
    <main>
      <section className="left">
        <input type="number" className="guess" ref={inputRef} />
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>
      <section className="right">
        <p className="message"> {message} </p>
        <p className="label-score">
          💯 Score: <span className="score">20</span>
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">0</span>
        </p>
      </section>
    </main>
  );
};

export default Main;
