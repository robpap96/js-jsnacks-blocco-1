"use strict";

const numeri = [1, 4, 5, 8, 2, 7];
let tot = 0;
for(let i=0; i<numeri.length; i++) {
    if(i % 2 !== 0) {
        tot += numeri[i];
    }
}
console.log(`${tot}`);