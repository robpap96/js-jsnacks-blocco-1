// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
"use strict";
const tot = 0;

for(let i = 0; i < 10; i++) {
    numeroDaSommare =  prompt(`insrisci il ${i} numero da sommare`);
    const tot += numeroDaSommare;
}
console.log(`${tot}`);