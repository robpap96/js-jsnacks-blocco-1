//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare 
//o no alla festa.


"use strict";
const Invitati = ['antonio', 'giovanni', 'nicola', 'francesco'];
const nomeUtente = prompt("inserisci il tuo nome");
for (let i = 0; i<Invitati.length; i++) {
    if( Invitati[i] === nomeUtente) {
        console.log("OK!!! Puoi partecipare!");
        break;
    } else if (i == Invitati.length-1){
        console.log("NO!!! Non puoi partecipare!");
    } 
}