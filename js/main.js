let distance = parseInt(prompt("Inserisci i km che dovrai percorrere: "));

let eta = parseInt(prompt("Inserisci eta: "));

let biglietto;

console.log(`Il percorso da te indicato è di : ${distance} km che dovrai percorre`);

console.log(`L'età del passeggero è di : ${eta} anni`);

km.innerHTML = distance;
age.innerHTML = eta;

biglietto = distance * 0.21;

sales.innerHTML = biglietto;

console.log(`Il prezzo pieno del biglietto è di : ${biglietto.toFixed(2)} euro`);


if (eta < 18) {

    biglietto = (biglietto - (biglietto * 0.20)).toFixed(2);

    ticket.innerHTML = biglietto;

    console.log(`Il prezzo del biglietto scontato per giovani è: ${biglietto} euro`);

} else if (eta > 65) {

    biglietto = (biglietto - (biglietto * 0.40)).toFixed(2);

    ticket.innerHTML = biglietto;


    console.log(`Il prezzo del biglietto scontato per over 65 è: ${biglietto} euro `);

} else {

    biglietto = biglietto.toFixed(2);

    

    console.log(`Non hai diritto ad una scontistica. `);
    console.log(`Il prezzo pieno e': ${biglietto}`);
}