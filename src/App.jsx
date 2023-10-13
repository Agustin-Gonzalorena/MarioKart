import "./App.css";
import { useEffect, useState } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import Rail from "./Components/Rail/Rail";
import Character from "./Components/Character/Character";
import StartCard from "./Components/StartCard/StartCard";
import WinnerCard from "./Components/WinnerCard/WinnerCard";
import coinImg from "./assets/img/coin.png";
import { charactersApi } from "./utils/charactersApi";
import Countdown from "./Components/Countdown/Countdown";
import Footer from "./Components/Footer/Footer";

function App() {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [finish, setFinish] = useState(false);
  const [winner, setWinner] = useState(null);
  const [times, setTimes] = useState([]);

  const startGame = () => {
    setStart(false);
    random();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setInGame(true);
      finishGame();
    }, 3000);
  };
  const finishGame = () => {
    setTimeout(() => {
      setInGame(false);
      setFinish(true);
      confetti();
    }, 4000);
  };
  const restartGame = () => {
    setFinish(false);
    setTimes([]);
    setStart(true);
  };
  const random = () => {
    setTimes([
      Math.random(4 - 2.4) + 2.4,
      Math.random(4 - 2.5) + 2.5,
      Math.random(4 - 2.5) + 2.5,
      Math.random(4 - 2.8) + 2.5,
      Math.random(4 - 2.5) + 2.5,
    ]);
  };
  const checkWinner = () => {
    let min = Math.min(...times);
    let index = times.indexOf(min);
    setWinner(index);
  };
  useEffect(() => {
    checkWinner();
  }, [times]);
  useEffect(() => {
    random();
  }, []);
  return (
    <>
      <header>
        {/* <img src={coinImg} />
        <h1>{coins}</h1> */}
      </header>
      <section className={loading ? "menu-container open" : "menu-container"}>
        <Countdown loading={loading} inGame={inGame} />
      </section>
      <section className={start ? "menu-container open" : "menu-container"}>
        <StartCard startGame={startGame} />
      </section>
      <section className={finish ? "menu-container open" : "menu-container"}>
        <WinnerCard restartGame={restartGame} winner={winner} />
      </section>

      <article className="race-container">
        <div className="topBush"></div>
        {charactersApi.map((c) => {
          return (
            <Rail key={c.id}>
              <Character
                character={c}
                inGame={inGame}
                characterImg={c.img}
                wheelLeft={c.wheelLeft}
                wheelRight={c.wheelRight}
                time={[...times][c.id - 1]}
              />
            </Rail>
          );
        })}
        <div className="downBush"></div>
        <div className="goal"></div>
      </article>
      <Footer />
      <div className="msj">
        <h1>Only mobile</h1>
        <p>desktop coming soon...</p>
      </div>
    </>
  );
}

export default App;
