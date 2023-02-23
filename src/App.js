import forca0 from "./components/assets/forca0.png"

import { useState } from "react";

import "./components/css/reset.css"
import "./components/css/style.css"

import Jogo from "./components/Jogo";
import Letras from "./components/Letras"
import palavras from "./palavras";





export default function App() {

   
    const [erro, setErro] = useState(0);
    const [imagem, setImagem] = useState(forca0);
    const [palavra, setPalavra] = useState([]);
    

 
    

  function aleatorizar(){
    const sorteio = Math.floor(Math.random()*palavras.length);
};

  function escolher(){
  let lista = [...palavras];
  lista = lista.sort(aleatorizar)
}

console.log(imagem)
 return (
 <div>
    <div >
      Jogo da forca
    </div>

    <Jogo
    


    imagem={imagem}
   
    
    />
     
    </div>
  );
}


