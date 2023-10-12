import React, { useEffect, useState } from "react";
import "./WinnerCard.css";

const WinnerCard = ({ restartGame, winner }) => {
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
      <h1>Gano {winnerName}</h1>
      <button className="start-btn" onClick={restartGame}>
        Jugar otra vez
      </button>
    </article>
  );
};

export default WinnerCard;
