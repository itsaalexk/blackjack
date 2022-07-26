let deck = [];
const tipos= ["C","D","H","S"]
const tiposEspeciales = ["A","J","Q","K"];
let puntos = document.querySelector("small")
const btnCarta = document.querySelector("#pedir")
let puntosJugador = 0;
    puntosPc      = 0;

    // Crea la baraja de cartas
const createDeck = ()=>{

    for (let i = 2; i<= 10 ; i++){
        for (tipo of tipos ){
            deck.push( i +tipo)
        }
    }
    for (tipo of tipos){
        for ( especial of tiposEspeciales){
            deck.push( especial + tipo)
        }
    }
    
    //utilizando la libreria underscore, baraja las cartas que hemos creado
    
    deck = _.shuffle(deck)
    return deck
}
createDeck()


// Pide la baraja de cartas


const pedirCarta= (card) =>{
    if (deck.lenght === 0){
        throw ("No quedan cartas disponibles")
    }
    let carta = deck.pop()
    return carta;    
}


const valorCarta = (carta) =>{
    const valor = carta.substring(0,carta.length-1);
    return ( isNaN( valor )) ?
            (valor === "A") ? 11 : 10
            : valor *1;
    
    }



    //EVENTOS

btnCarta.onclick = ()=>{
    const carta = pedirCarta();
    console.log(carta)
    puntosJugador = puntosJugador + valorCarta(carta)
    
    
    puntos.textContent = puntosJugador
    
}
