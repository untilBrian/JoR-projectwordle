import React from 'react';
import { range } from '../../utils';

function GuessRow({checkedGuessArray}) {
  return (
  <p className="guess">
    {range(5).map((i) => {
      const className = checkedGuessArray ? `cell ${checkedGuessArray[i].status}` : "cell";
      return <span className={className} key={i}> {checkedGuessArray ? checkedGuessArray[i].letter : undefined} </span>
    })}
  </p>
  );
}

export default GuessRow;

