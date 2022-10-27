let ticket = parseInt(prompt("Inserisci i km che dovrai percorrere: "));

let eta = parseInt(prompt("Inserisci eta: "));

let biglietto;

console.log(`Il percorso da te indicato è di : ${ticket} km che dovrai percorre`);

console.log(`L'età del passeggero è di : ${eta} anni`);

km.innerHTML = ticket;

biglietto = ticket * 0.21;

console.log(`Il prezzo pieno del biglietto è di : ${biglietto.toFixed(2)} euro`);


if (eta < 18) {

    let bigliettoTeen;

    bigliettoTeen = biglietto - (biglietto * 0.20);

    console.log(`Il prezzo del ticket scontato per giovani è: ${bigliettoTeen.toFixed(2)} euro`);

} else if (eta > 65) {

    let bigliettoOver65;

    bigliettoOver65 = biglietto - (biglietto * 0.40);

    console.log(`Il prezzo del ticket scontato per over 65 è: ${bigliettoOver65.toFixed(2)} euro `);

}