import React from 'react';

function GuessInput({addGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleChange(e){
    setTentativeGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e){
    e.preventDefault();
    addGuess(tentativeGuess);
    console.log(tentativeGuess); //for testing (change later)
    //need to save value later
    setTentativeGuess("");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <div/>
      <input 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input" 
        type="text"
        value={tentativeGuess}
        onChange={handleChange}/>
    </form>
  </div>;

}

export default GuessInput;
