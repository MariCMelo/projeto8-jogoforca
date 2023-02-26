import styled from "styled-components";
import "./css/style.css"

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]


export default function Jogo(props){

    const Corpo = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    `
    const Forca = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 400px;
    height: 466px;
    `
    const Container = styled.div`
    width: 50vw;
    margin-top: 65px;
    margin-left: 20px;
    `
    const Botao = styled.div`
    width: 200px;
    height: 60px;
    margin-bottom: 150px;
    color: white;
    background-color: #27AE60;
    font-family: 'Roboto';
    font-size:20px;
    font-weight: 700;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    `
    const Palavra = styled.div`
   
    font-size: 50px;
    font-family: 'Noto Sans', sans-serif;
    padding-right: 5px;
    display: flex;
    margin-right: 90px;
    justify-content:center;
    letter-spacing: 0.5em;
    color:${(props)=> props.StatusJogo === "vitoria"? "green" : props.StatusJogo === "derrota"? "red" : "black"} 
    `
return(
        <Corpo>
            <Forca>
               <img src={imagens[props.erro]}/> 
            </Forca>
            
        <Container>
            <Botao onClick={props.comecar}> Escolher palavra</Botao>
            <Palavra> {props.palavraJogo.map((c) => <span>{c}</span>)}</Palavra>

        </Container>
            

        </Corpo>
    )


    }
    


