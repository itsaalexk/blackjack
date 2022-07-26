let deck = [];
const tipos= ["C","D","H","S"]
const tiposEspeciales = ["A","J","Q","K"];
let puntos = document.querySelector("small")
const btnCarta = document.querySelector("#pedir")
const divJugador = document.querySelector("#jugador-cartas")
const divPc = document.querySelector("#ordenador-cartas");
let puntos1 = document.querySelector("#ia")
let puntosJugador = 0;
    puntosIA      = 0;

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

    // TURNO IA
const turnoIA = (puntosMin)=>{
        do{
        const carta = pedirCarta();

        puntosIA = puntosIA + valorCarta(carta);
        puntos1.textContent = puntosIA

        const imgCarta = document.createElement("img")
        imgCarta.src =`cartas/${carta}.png`
        imgCarta.classList.add("card")
        divPc.append(imgCarta)

        } while ( puntosIA < puntosMin )
    }



    //EVENTOS

btnCarta.onclick = ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta)
    puntos.textContent = puntosJugador

    const imgCarta = document.createElement("img")
    imgCarta.src =`cartas/${carta}.png`
    imgCarta.classList.add("card")
    divJugador.append(imgCarta)
   
    if (puntosJugador > 21){
        alert("Has perdido")
        btnCarta.disabled = true;
    } else if (puntosJugador === 21){
        alert("Has Ganado!")
        btnCarta.disabled = true;
    }
    

}

turnoIA(12)