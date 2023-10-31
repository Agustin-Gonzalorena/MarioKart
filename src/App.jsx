import "./App.css";
import { useEffect, useState } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import coinImg from "./assets/img/coin.png";
import { charactersApi } from "./utils/charactersApi";
import {
  Character,
  Countdown,
  Footer,
  Rail,
  StartCard,
  WinnerCard,
} from "./Components/index.js";

function App() {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [finish, setFinish] = useState(false);
  const [winner, setWinner] = useState(null);
  const [character, setCharacter] = useState(null);
  const [times, setTimes] = useState([]);
  const [coins, setCoins] = useState(500);
  const [bet, setBet] = useState(null);

  const startGame = (_bet, character) => {
    setCoins(coins - _bet);
    setBet(_bet);
    setCharacter(character);
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
    setTimeout(
      () => {
        setInGame(false);
        setFinish(true);
        confetti();
      },
      window.innerWidth > 768 ? 6000 : 4000
    );
  };

  const random = () => {
    let seg = [];
    if (window.innerWidth > 768) {
      seg = [6, 4.5];
    } else seg = [4, 2.5];
    setTimes([
      Math.random(seg[0] - seg[1]) + seg[1],
      Math.random(seg[0] - seg[1]) + seg[1],
      Math.random(seg[0] - seg[1]) + seg[1],
      Math.random(seg[0] - seg[1]) + seg[1],
      Math.random(seg[0] - seg[1]) + seg[1],
    ]);
  };

  const checkWinner = () => {
    let min = Math.min(...times);
    let index = times.indexOf(min);
    setWinner(index);
  };
  const playAgain = () => {
    setFinish(false);
    setTimes([]);
    setStart(true);
  };
  const restartGame = () => {
    setBet(0);
    setCharacter(null);
    setFinish(false);
    setTimes([]);
    setCoins(500);
    setStart(true);
  };
  useEffect(() => {
    checkWinner();
  }, [times]);
  useEffect(() => {
    random();
  }, []);
  useEffect(() => {
    if (finish) {
      if (winner == character) {
        setCoins(coins + bet * 2);
      } else {
        setCoins(coins);
      }
    }
  }, [finish]);
  return (
    <>
      <header>
        <img src={coinImg} />
        <h1>{coins}</h1>
      </header>
      <section className={loading ? "menu-container open" : "menu-container"}>
        <Countdown loading={loading} inGame={inGame} />
      </section>
      <section className={start ? "menu-container open" : "menu-container"}>
        <StartCard startGame={startGame} coins={coins} />
      </section>
      <section className={finish ? "menu-container open" : "menu-container"}>
        <WinnerCard
          restartGame={restartGame}
          playAgain={playAgain}
          winner={winner}
          coins={coins}
        />
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
    </>
  );
}

export default App;
