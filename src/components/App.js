import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import palavras from "./palavras";

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true)


  const [clicked, setClicked] = useState([])
    

  return (
    <div >
    <Game 
    isDisabled = {isDisabled}
    setIsDisabled = {setIsDisabled}
    
    
    />
    <Letters clicked={clicked} setClicked={setClicked}
     isDisabled = {isDisabled} />

    </div>
  );
}


