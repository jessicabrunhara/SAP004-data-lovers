//import { search } from './data.js';

import data from './data/pokemon/pokemon.js';

//pokeData = array. Banco de dados
const pokeData = data.pokemon;
const rootElement = document.getElementById("root"); //importanto div do html

//estruturando o card
const pokeCard = function (num, img, name, type, weaknesses) {
 return `<div class="pokecard">
            ${num}
            <img class="miniaturaPokemon" src="${img}" alt ="miniatura pokemon"> 
            ${name} 
            Type: ${type} 
            Weaknesses: ${weaknesses}
         </div>`
}

//função que gera o card
const drawCard = function (pokemon) {
  rootElement.innerHTML += pokeCard(pokemon.num,
                                    pokemon.img, 
                                    pokemon.name, 
                                    pokemon.type, 
                                    pokemon.weaknesses)
}

pokeData.map(drawCard) //mapeando e gerando a função que faz o card.


//função filtrar por tipo
function filterType() {
  const tipoEscolhido = document.getElementById("select-type").value //pegando o tipo escolhido pelo usuário. const tipoEscolhido recebe.

  const filteredData = pokeData.filter(function (pokemon) { //const filteredData é onde vai receber o resultado filtrado. pokeData (array com o data.pokemon).filter e escrevo a função que executa o filtro
    return pokemon.type.includes(tipoEscolhido) //includes compara elementos de outra array, pois type é uma array dentro da array pokeData. 
  })
 
  rootElement.innerHTML = ''
  filteredData.map(drawCard)
 
}


/*function OrderByAlphabet () {
  const ordemEscolhida = document.getElementById("order-by-alphabet").value
  const ordemAscendente = pokeData.sort (function (a,b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
  })
} */




//verificando eventos
document.getElementById("select-type").addEventListener("change", filterType); //verificando evento.
//document.getElementById("order-by-alphabet").addEventListener("change", OrderByAlphabet);
//document.getElementById("search-box").addEventListener("search", filterSearchBox)
