// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
"use strict";
let number = [];

for(let i = 0; i < 6; i++) {
    const numberInsert = Number(prompt(`insrisci un numero`)) ;
    if (numberInsert % 2 !== 0) {
        number.push(`${numberInsert}`);
    }
}
console.log("i numeri inseriti sono: ");
for(let i = 0; i<number.length; i++) {
    console.log(`${number[i]}`);
}