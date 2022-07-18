let deck = [];
const tipos= ["C","D","H","S"]
const tiposEspeciales = ["A","J","Q","K"];

const createDeck = ()=>{

    for (let i = 2; i<= 10 ; i++){
        for (tipo of tipos ){
            deck.push( i +tipos)
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

const pedirCarta= (card) =>{
    if (deck.lenght === 0){
        throw new Error ("No quedan cartas disponibles")
    }
    let carta = deck.pop()
    return carta;    
}
pedirCarta()

const valorCarta = (card) =>{
    const valor = card.substring(0, card.length-1)
    if ( isNaN(card))
    console.log(valor)
}
valorCarta("2D")