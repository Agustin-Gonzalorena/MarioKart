import "./App.css";
import { useEffect, useState, max } from "react";
import Rail from "./Components/Rail/Rail";
import Character from "./Components/Character/Character";
import StartCard from "./Components/StartCard/StartCard";
import WinnerCard from "./Components/WinnerCard/WinnerCard";
import coinImg from "./assets/img/coin.png";
import { charactersApi } from "./utils/charactersApi";
import Countdown from "./Components/Countdown/Countdown";

function App() {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [finish, setFinish] = useState(false);
  const [winner, setWinner] = useState(null);
  const [times, setTimes] = useState([]);

  const startGame = () => {
    setStart(false);
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
    }, 4000);
  };
  const restartGame = () => {
    setFinish(false);
    setTimes([]);
    setStart(true);
    setTimeout(() => {
      random();
    }, 500);
  };
  const random = () => {
    setTimes([
      Math.random(4 - 2.5) + 2.5,
      Math.random(4 - 2.5) + 2.5,
      Math.random(4 - 2.5) + 2.5,
      Math.random(4 - 2.5) + 2.5,
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
      {/* <section className={loser ? "menu-container open" : "menu-container"}>
        <div
          style={{ height: "300px", width: "200px", backgroundColor: "white" }}
        >
          <h1>Perdiste</h1>
          <button onClick={cleanAll}>Reiniciar</button>
        </div>
      </section> */}
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
      <footer>
        <a
          href="https://portfolio-agustin-gonzalorena.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>© 2023 Desarrolado por Agustin Gonzalorena</p>
        </a>
        <p></p>
      </footer>
      <div className="msj">
        <h1>Solo para mobile</h1>
      </div>
    </>
  );
}

export default App;
