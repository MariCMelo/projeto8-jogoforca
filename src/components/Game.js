import { useState } from "react"
import "../style/style.css"

import image0 from "../assets/forca0.png"
import image1 from "../assets/forca1.png"
import image2 from "../assets/forca2.png"
import image3 from "../assets/forca3.png"
import image4 from "../assets/forca4.png"
import image5 from "../assets/forca5.png"
import image6 from "../assets/forca6.png"

import Letters from "./Letters"
import palavras from "./palavras"


export default function Game(props) {
    const [started, setStarted] = useState(true)

    const image = [image0, image1, image2, image3, image4, image5, image6]

    function startGame() {
        setStarted(false)
        props.setError(0)
        props.setIsDisabled(false)


        sortingWord()


    }

    function sortingWord() {
        const randon = Math.floor(Math.random() * palavras.length)
        const word = palavras[randon]
        const misteryWord = word.split("")
        props.setChosenWord(misteryWord)

        let underline = []
        misteryWord.forEach(() => underline.push(" _"))
        props.setMisteryWord(underline)


    }

    function countErrors() {
    }

    function clickLetter() {

    }

    return (
        <body className="body">
            <gameImage data-test="game-image">
                <img src={image[props.error]}></img>
            </gameImage>


            <startbutton>
                <button
                    data-test="choose-word"
                    onClick={startGame}

                >
                    Escolher palavra
                </button>
            </startbutton>

            <word
                data-test="word"
            >
                <span>
                    {props.misteryWord}
                </span>
            </word>


        </body>
    )
}