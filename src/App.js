import forca0 from "./components/assets/forca0.png"
import { useState } from "react";
import "./components/css/reset.css"
import "./components/css/style.css"
import Jogo from "./components/Jogo";
import Letras from "./components/Letras"
import palavras from "./palavras";


let palavra = [];

export default function App() {
  const [erro, setErro] = useState(0);
  const [palavra, setPalavra] = [];
  const [palavraVazia, setPalavraVazia] = [];
  const [habilitado, setHabilitado] = (false)
  const [statusJogo, setStatusJogo] = useState ("")

    
    

// Seleciona um valor aleatório para selecionar a palavra do jogo no futuro
  function aleatorizar(){
    const sorteio= Math.floor(Math.random()*palavras.length);
    
    return sorteio
    
};


// Selecionar palavra da array de palavras
  function escolherPalavra(){
  const palavraEscolhida = palavras[aleatorizar()];

  return palavraEscolhida;
  }
  


 
//Dá inicio ao jogo após clicar no botão verde de escolher palavra
  function comecarJogo(){
    const palavraEscolhida = escolherPalavra();
    const palavraSecreta = [];
    for (let i=0; i<palavraEscolhida.length; i++){
      palavraSecreta.push("_");   
    }
    setErro(0);
    setPalavra(palavraEscolhida);
    setPalavraVazia(palavraSecreta);
    setStatusJogo("")
    setHabilitado(true);
  }

//A ação que ocorrerá quando uma letra no teclado do jogo for apertada
  function clicaLetra(letra){
    const palavraArray = Array.from(palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    if(palavraArray.includes(letra)){
      let indicesMudar = [];
      for(let i=0; i<palavraArray.length; i++){
        if(palavraArray[i] === letra){
         indicesMudar.push(i) 
        }
      }
      for (let i=0; i<indicesMudar.length; i++){
        palavraVazia[indicesMudar[i]]= letra
      }
      setPalavraVazia(palavraVazia);
    
      
    }else{ 
      const errou = erro +1;
      setErro(errou);
    }

    

  }
// Verifica se as tentattivas lavaram ao acerto ou ao erro
  function verificaResultadoJogo(){
      if (erro > 5){
        setErro(6)
        setPalavraVazia(Array.from(palavra))
        setStatusJogo("derrota")
        setHabilitado(false)
        }
      else if(palavraVazia.join('') === palavra){
        setHabilitado(false)
        setStatusJogo("vitoria")

      }
    }
    
 
console.log()


console.log(imagem)
 return (
  <div>
    <div>Jogo da forca</div>

    <Jogo imagem={imagem}
    palavra
    />
    </div>
  );
}


