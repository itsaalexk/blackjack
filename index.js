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
    console.log(deck)
}

createDeck()

