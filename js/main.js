let ticket = parseInt(prompt("Inserisci i km che dovrai percorrere: "));

let eta = parseInt(prompt("Inserisci eta: "));

console.log(`Il percorso da te indicato è di : ${ticket} km che dovrai percorre`);

console.log(`L'età del passeggero è di : ${eta} anni`);


ticket = ticket * 0.21;

console.log(`Il prezzo pieno del biglietto è di : ${ticket.toFixed(2)} euro`);


if (eta < 18) {

    ticket = ticket - (ticket * 0.20);

    console.log(`Il prezzo del ticket scontato per giovani è: ${ticket.toFixed(2)} euro`);

} else if (eta > 65) {

    ticket = ticket - (ticket * 0.40);

    console.log(`Il prezzo del ticket scontato per over 65 è: ${ticket.toFixed(2)} euro `);

}