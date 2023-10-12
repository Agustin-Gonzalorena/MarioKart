import React, { useEffect } from "react";
import { useState } from "react";
import "./StartCard.css";
import { charactersApi } from "../../utils/charactersApi";
import coinImg from "../../assets/img/coin.png";

const StartCard = ({ startGame }) => {
  return (
    <article className="card">
      {/* <h1>Elige un corredor</h1>
      <div className="team-container">
        {charactersApi.map((character) => {
          return (
            <div
              onClick={() => {
                sle(character.id);
              }}
              key={character.id}
              className="team-card"
            >
              <img src={character.img} alt={character.name} />
              <h3>{character.name}</h3>
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
      </div> */}
      <button
        onClick={() => {
          startGame();
        }}
        className="start-btn"
      >
        Run
      </button>
    </article>
  );
};

export default StartCard;
