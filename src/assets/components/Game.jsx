import Dice1 from "./images/dice1.png";
import Dice2 from "./images/dice2.png";
import Dice3 from "./images/dice3.png";
import Dice4 from "./images/dice4.png";
import Dice5 from "./images/dice5.png";
import Dice6 from "./images/dice6.png";
import React, { useState } from "react";
import "./Game.css";
const object = {
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
};
const Game = () => {
  const [num, setNum] = useState(0);
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const teller = (val) => {
    try {
      if (num === 0) throw new Error("Choose a Number First");
      if (num === val) setScore(score + 1);
      else setScore(score - 1);
      setError("");
    } catch (error) {
      setError(error.message);
    }
    setNum(0);
  };
  const rollDice = () => {
    let d = Math.floor(Math.random() * 6) + 1
    setDice(d);
    teller(d);
  };
  return (
    <div className="container">
      <div className="nav">
        <div className="score">{score}</div>
        <div className="choose">
          <div>
            <label>Chosse a Number</label>
          </div>
          <div className="choice">
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <label key={value}>
                {value}
                <input
                  type="radio"
                  name="dice"
                  value={value}
                  checked={num === value}
                  onChange={() => setNum(value)}
                />
              </label>
            ))}
          </div>
          <div>{error && <p className="output">{error}</p>}</div>
        </div>
      </div>
      <div className="hero">
        <img src={object[dice]} alt="" />
        <button onClick={rollDice}>Roll</button>
        <details className="rules">
          <summary>Rules of the game</summary>
          <p>
            1️⃣ Select a Number (1-6) before rolling. <br />
            2️⃣ Roll the Dice to get a random number. <br />
            3️⃣ Check Your Guess: ✅ Match = +1 Point ❌ No Match = -1 Point.{" "}
            <br />
            4️⃣ Must Select a Number before checking. <br />
            5️⃣ Keep playing <br />
            to get the highest score! 🔥 Good Luck & Have Fun! 🎲
          </p>
        </details>
      </div>
    </div>
  );
};

export default Game;
