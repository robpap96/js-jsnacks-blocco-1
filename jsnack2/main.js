//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga
"use strict";

const parola1 = prompt("inserisci la prima parola");
const parola2 = prompt("inserisci la seconda parola");

if(parola1.length < parola2.length){
    console.log(`${parola1} ${parola2}`);
} else if(parola1.length > parola2.length) {
    console.log(`${parola2} ${parola1}`);
} else {
    console.log("le parole sono della stessa lunghezza");
}
