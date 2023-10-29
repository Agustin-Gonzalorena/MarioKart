import React, { useEffect, useState } from "react";

import "./WinnerCard.css";

const WinnerCard = ({ restartGame, playAgain, winner, coins }) => {
  const [winnerName, setWinnerName] = useState("Mariooo");

  useEffect(() => {
    if (winner === null) return;
    if (winner === 0) {
      setWinnerName("Mario");
    } else if (winner === 1) {
      setWinnerName("Luigi");
    } else if (winner === 2) {
      setWinnerName("Peach");
    } else if (winner === 3) {
      setWinnerName("Bowser");
    } else if (winner === 4) {
      setWinnerName("Toad");
    }
  }, [winner]);

  return (
    <article className="cardWinner">
      {coins === 0 ? (
        <h1 style={{ color: "red", margin: "0" }}>Game Over</h1>
      ) : null}
      <h1>{winnerName} win!</h1>
      <div className="imgWinner" id={winnerName}></div>

      <button
        className="start-btn"
        onClick={() => {
          if (coins === 0) restartGame();
          else playAgain();
        }}
      >
        {coins === 0 ? "Restart" : "Play Again"}
      </button>
    </article>
  );
};

export default WinnerCard;
