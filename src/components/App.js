import React, { useState } from "react";
import Game from "./Game";
import Letters, { alfabeto } from "./Letters";
import palavras from "../palavras";

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(0);
  const [chosenWord, setChosenWord] = useState([]);
  const [misteryWord, setMisteryWord] = useState([]);
  const [clicked, setClicked] = useState(alfabeto);
  const [gameStatus, SetGameStatus] = useState("")
 
  
  function startGame() {
   
    setError(0);
    setIsDisabled(false);
    sortingWord();
    setClicked([])
    SetGameStatus("")
    console.log(chosenWord);

  }

  function finishedGame() {
    setMisteryWord(chosenWord);
    setClicked(alfabeto)
  }

  function sortingWord() {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const chosenWord = palavras[randomIndex];
    const misteryWord = chosenWord.split("");
    setChosenWord(misteryWord);
    const underline = Array(misteryWord.length).fill(" _");
    setMisteryWord(underline);
  }

  function click(letter) {
    setClicked([...clicked, letter]);
  
    if (chosenWord.includes(letter)) {
      rightLetter(letter);
    } else {
      wrongLetter(letter);
    }
  }
  function rightLetter(clickedLetter) {
    const newWordArray = chosenWord.map((letter, i) => {
      if (letter === clickedLetter) {
        return clickedLetter;
      } else {
        return misteryWord[i];
      }
    });
  
    setMisteryWord(newWordArray);
  
    if (!newWordArray.includes(" _")) {
      finishedGame();
      SetGameStatus("victory")
    }
  }

  function wrongLetter(clickedLetter) {
    const mistake = error + 1;
    setError(mistake);
  
    if (mistake >= 5) {
      setError(6);
      setIsDisabled(true);
      SetGameStatus("lose")
      finishedGame();
    }
  }

  return (
    <div>
      <Game
        startGame={startGame}
        error={error}
        setError={setError}
        misteryWord={misteryWord}
        setMisteryWord={setMisteryWord}
        gameStatus={gameStatus}
      />

      <Letters
        isDisabled={isDisabled}
        clicked={clicked}
        click={click}
      />
    </div>
  );
}