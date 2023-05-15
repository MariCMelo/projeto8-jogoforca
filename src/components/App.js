import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import palavras from "./palavras";

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [error, setError] = useState(0)
  const [chosenWord, setChosenWord] = useState([])
  const [word, setWord] = useState([])
  const [misteryWord, setMisteryWord] = useState([])


  const [clicked, setClicked] = useState([])
    

  return (
    <div >
    <Game 
    isDisabled = {isDisabled} setIsDisabled = {setIsDisabled}
    error={error} setError={setError}
    word={word} setWord={setWord}
    chosenWord={chosenWord} setChosenWord={setChosenWord}
    misteryWord={misteryWord} setMisteryWord={setMisteryWord}
    />
    
    <Letters clicked={clicked} setClicked={setClicked}
     isDisabled = {isDisabled} />

    </div>
  );
}


