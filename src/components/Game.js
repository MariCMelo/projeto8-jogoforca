import { useState } from "react"
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

import Letters from "./Letters"


export default function Game(props) {
    const [started, setStarted] = useState(true)
    const [error, setError] = useState(0)
    
    function startGame() {
        setStarted(false)
        setError(0)
        props.setIsDisabled(false)
        console.log("xxx")
    }

    return (
        <body>
            <img src={forca0}></img>

            <startButton>
                <button
                    data-test="choose-word"
                    onClick={startGame}

                >
                    Escolher palavra
                </button>
            </startButton>
        </body>
    )
}