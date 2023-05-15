import "../style/style.css";
import image0 from "../assets/forca0.png";
import image1 from "../assets/forca1.png";
import image2 from "../assets/forca2.png";
import image3 from "../assets/forca3.png";
import image4 from "../assets/forca4.png";
import image5 from "../assets/forca5.png";
import image6 from "../assets/forca6.png";

export default function Game(props) {
    const images = [image0, image1, image2, image3, image4, image5, image6];

    return (
        <div className="game">
            <div className="game-image" data-test="game-image">
                <img src={images[props.error]} alt={`Forca ${props.error}`} />
            </div>

            <div >
                <button
                    data-test="choose-word"
                    onClick={props.startGame}
                    className="start-button">
                    Escolher palavra
                </button>
            </div>

            <div className="word" >
                <span
                    data-test="word"
                    className={`word ${props.gameStatus}`}
                >{props.misteryWord}
                </span>
            </div>
        </div>
    );
}