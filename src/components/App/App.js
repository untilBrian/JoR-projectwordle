import React from 'react';
import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { checkGuess } from '../../game-helpers';

function Banner({ gameStatus }) {
  return (
    <div>
      {gameStatus === "win" && (
        <div className="happy banner">
          <p><strong>Congratulations!</strong> Got it in <strong>3 guesses</strong>.</p>
        </div>
      )}
      {gameStatus === "loss" && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>WHALE</strong>.</p>
        </div>
      )}
    </div>
  )
}

function App() {
  const [guessesArray, setGuessesArray] = React.useState([]); //guessArray is array of words (arrays of objects)
  const [gameStatus, setGameStatus] = React.useState("playing");

  function addGuess(value) { //adding a CHECKED guess to the array
    const checkedGuess = checkGuess(value, "WHALE");
    if (value === "WHALE") {
      setGameStatus("win");
    }
    else if (guessesArray.length === 5) {
      setGameStatus("loss");
    }

    const nextGuessesArray = [...guessesArray];
    nextGuessesArray.push(checkedGuess);
    setGuessesArray(nextGuessesArray);
  }

  return (
    <div className="wrapper">
      <Header></Header>
  
      <div className="game-wrapper">
        <Game />
          <GuessList guessesArray={guessesArray}/>
          <GuessInput addGuess={addGuess}/>
          <Banner gameStatus={gameStatus}/>
      </div>
    </div>
  );
}

export default App;
