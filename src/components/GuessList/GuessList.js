import React from 'react';
import GuessRow from '../GuessRow';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({guessesArray}) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
      <GuessRow checkedGuessArray={guessesArray[i]} key={i}/> 
    ))}
  </div>;
}

export default GuessList;

