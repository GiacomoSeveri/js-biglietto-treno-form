// console.log('js ok')

// 1 Prendo l'elemento dal DOM
// 2 Creo la costante del prezzo
// 3 Chiedo il numero di chilometri all'utente
// 4 Chiedo l'età all'utente
// 5 Calcolo il prezzo
// 6 Inserisco nell'HTML il prezzo calcolato con eventuali sconti


// Prendo l'elemento dal DOM
// const targetElement = document.getElementById('ticket');
const km = document.getElementById('km');
const ageUser = document.getElementById('age');
const calc = document.getElementById('calc');
const reset = document.getElementById('reset');
// console.log(targetElement);

// Creo la costante del prezzo
const price = 0.21;

calc.addEventListener('click', function () {
    const allPrice = km * price;
    console.log(allPrice);
});

