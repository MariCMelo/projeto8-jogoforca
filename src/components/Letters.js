
import React from "react";
import "../style/style.css";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export default function Letters({ click, clicked }) {
    return (
      <div className="keyboard">
        {alfabeto.map((l) => (
          <button
            key={l}
            data-test="letter"
            onClick={() => click(l)}
            disabled={clicked.includes(l)}
          >
            {l}
          </button>
        ))}
      </div>
    );
  }

export { alfabeto };