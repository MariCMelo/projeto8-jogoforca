import styled from "styled-components";

export default function Letras(props){
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const Teclado = styled.div`
max-width: 655px;
margin-left: 500px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Tecla = styled.button`
margin: 5px;
width: 40px;
height: 40px;
border: 1px;
border-color: #7AA7C7;
border-radius: 3px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;

background: ${props.disabled? "#9FAAB5" : "#E1ECF4"};

`

    return(

        <Teclado >
            {alfabeto.map((c) => 
            <Tecla data-test="letter" 
            onClick={()=> {props.clica(c)}} key={c} disabled={props.desabilitado || props.letrasClicadas.includes(c)} >{c}</Tecla>)}
        </Teclado>
    )
}

