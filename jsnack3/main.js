// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
"use strict";
let tot = 0;

for(let i = 0; i < 10; i++) {
    const number = Number(prompt(`insrisci un numero`)) ;
    tot += number;
}
console.log(`totale = ${tot}`);