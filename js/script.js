// console.log('js ok')

// 1 Prendo l'elemento dal DOM
// 2 Creo la costante del prezzo
// 3 Chiedo il numero di chilometri all'utente
// 4 Chiedo l'età all'utente
// 5 Calcolo il prezzo
// 6 Inserisco nell'HTML il prezzo calcolato con eventuali sconti


// Prendo l'elemento dal DOM
const targetElement = document.getElementById('ticket');
// console.log(targetElement);

// Creo la costante del prezzo
const price = 0.21;

// Chiedere i chilometri
const kilometres = prompt('Quanti chilometri vuoi fare?' , '50');
// console.log(kilometres);

// Chiedere l'età
const age = prompt('Quanti anni hai?' , '18');
// console.log(age);

// 5 Calcolo il prezzo
const totalPrice = price * kilometres;

let newPrice = 0;


if (age < 18) {
    const discount = totalPrice * 0.20;
    // console.log(discount);
    newPrice = totalPrice - discount;
    // console.log(newPrice);
}
else if (age > 65) {
    const discount = totalPrice * 0.40;
    // console.log(discount);
   newPrice = totalPrice - discount;
} 
else {
    newPrice = totalPrice;
}

newPrice = newPrice.toFixed(2);

// Inseriamo il isultato nell'HTML
targetElement.innerText = `Hai deciso di fare ${kilometres} KM, Hai ${age} anni: Il tuo biglietto costa ${newPrice} €.`;