import React, { useState, useEffect } from "react";
import "./Character.css";

const Character = ({
  character,
  inGame,
  characterImg,
  wheelLeft,
  wheelRight,
  time,
}) => {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    if (inGame) {
      setSpeed(time);
    } else {
      setSpeed(0);
    }
  }, [inGame]);
  return (
    <article
      className={inGame ? "character-box open" : "character-box"}
      style={{ "--transition-duration": `${speed}s` }}
    >
      <section className={inGame ? "speed-lines open" : "speed-lines"}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </section>
      <img className="character" src={characterImg} alt="icono loading" />
      <div id={wheelLeft} className={inGame ? "wheel open" : "wheel"}>
        <div className="reflex"></div>
      </div>
      <div id={wheelRight} className={inGame ? "wheel open" : "wheel"}>
        <div className="reflex"></div>
      </div>
    </article>
  );
};

export default Character;
