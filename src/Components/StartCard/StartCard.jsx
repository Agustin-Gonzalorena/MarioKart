import React, { useEffect } from "react";
import { useState } from "react";
import "./StartCard.css";
import { charactersApi } from "../../utils/charactersApi";
import coinImg from "../../assets/img/coin.png";

const StartCard = ({ startGame, coins }) => {
  const [bet, setBet] = useState(10);
  const [character, setCharacter] = useState(null);
  const [warning, setWarning] = useState(false);

  const changeBet = (value) => {
    if (bet + value >= 10) {
      setBet(bet + value);
    }
    if (bet + value > coins) {
      setBet(coins);
    }
  };
  const sle = (id) => {
    setCharacter(id - 1);
  };
  const btnStart = (bet, character) => {
    if (character === null) {
      setWarning(true);
      return;
    }
    startGame(bet, character);
  };
  useEffect(() => {
    setCharacter(null);
    setBet(10);
    setWarning(false);
  }, [coins]);

  return (
    <article className="card">
      <h1>Elige un corredor</h1>
      {warning ? (
        <p style={{ margin: "0", color: "#ffc107" }}>
          Tienes que elegir un corredor
        </p>
      ) : null}
      <div className="team-container">
        {charactersApi.map((c) => {
          return (
            <div
              onClick={() => {
                sle(c.id);
              }}
              key={c.id}
              className="team-card"
              style={
                c.id - 1 === character ? { boxShadow: "0 0 10px 3px red" } : {}
              }
            >
              <img src={c.img} alt={c.name} />
              <h3>{c.name}</h3>
            </div>
          );
        })}
        <div className="bet-container">
          <p style={{ margin: "0px" }}>Apostar {bet}</p>
          <img src={coinImg} />
        </div>
      </div>
      <div className="bet-buttons">
        <button onClick={() => changeBet(-100)}>-100</button>
        <button onClick={() => changeBet(-10)}>-10</button>
        <button onClick={() => changeBet(10)}>+10</button>
        <button onClick={() => changeBet(100)}>+100</button>
      </div>
      <button
        onClick={() => {
          btnStart(bet, character);
        }}
        className="start-btn"
      >
        Run
      </button>
    </article>
  );
};

export default StartCard;
