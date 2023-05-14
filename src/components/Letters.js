import "../style/style.css"
import { useState } from "react"

export default function Letters(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    function click(letter) {
        const isClicked = props.clicked.includes(letter)
        if (!isClicked && props.clicked.length < 6) {
            const newClicked = [...props.clicked]
            newClicked.push(letter)

            props.setClicked(newClicked)
            console.log(newClicked)
        }
    }

    return (

        <keybord  >
            {alfabeto.map((l) =>
                <button
                    key={l}
                    data-test="letter"
                    className={`button ${props.clicked.includes(l) ? "picked" : ""
                        }`}
                    onClick={() => click(l)}
                    disabled={props.isDisabled || props.clicked.includes(l)}
                >
                    {l}
                </button>
            )}

        </keybord>



    )
}

