
import { useState } from "react";
import "./components/css/reset.css";
import "./components/css/style.css";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

const palavra = [];

export default function App() {
  const [erro, setErro] = useState(0);
  const [palavra, setPalavra] = useState([]);
  const [palavraVazia, setPalavraVazia] = useState([]);
  const [letrasClicadas, setLetrasClicadas,] = useState([]);
  const [desabilitado, setDesabilitado] = useState(true);
  const [statusJogo, setStatusJogo] = useState("");

// Seleciona um valor aleatório para selecionar a palavra do jogo no futuro
  function aleatorizar(){
    return Math.floor(Math.random()*palavras.length);
};

// Selecionar palavra da array de palavras
  function escolherPalavra(){
  return palavras[aleatorizar()];
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
    setStatusJogo("");
    setDesabilitado(false);
    setLetrasClicadas([]);

    console.log(palavraEscolhida);
  }

//A ação que ocorrerá quando uma letra no teclado do jogo for apertada
  function clicaLetra(letra){
    const letrasClicadasArray = [...letrasClicadas,letra]
    setLetrasClicadas(letrasClicadasArray);
    const palavraArray = Array.from(palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    if(palavraArray.includes(letra)){
      let indicesMudar = [];
      for(let i=0; i<palavraArray.length; i++){
        if(palavraArray[i] === letra){
         indicesMudar.push(i);
        }
      }
      for (let i=0; i<indicesMudar.length; i++){
        palavraVazia[indicesMudar[i]]= letra;
      }
      setPalavraVazia(palavraVazia);
      verificaResultadoJogo();
    } else { 
      const errou = erro +1;
      setErro(errou);
      verificaResultadoJogo();
    }
  };

// Verifica se as tentattivas lavaram ao acerto ou ao erro
  function verificaResultadoJogo(){
      if (erro > 4){
        setErro(6);
        setPalavraVazia(Array.from(palavra));
        setStatusJogo("derrota");
        setDesabilitado(true);
        }
      else if (palavraVazia.join('') === palavra){
        setPalavraVazia(Array.from(palavra));
        setDesabilitado(true);
        setStatusJogo("vitoria");
      }
    };
 return (
    <>
      <Jogo erro={erro}
        comecar={comecarJogo}
        palavraJogo={palavraVazia}
        statusJogo={statusJogo}
      />
      <Letras clica={clicaLetra} statusJogo={statusJogo} desabilitado={desabilitado} letrasClicadas={letrasClicadas}/>
    </>
  );
};


