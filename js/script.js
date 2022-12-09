// console.log('js ok')

// 1 Prendo l'elemento dal DOM
// 2 Lego tutto sull'event listener del bottone di conferma
// 3 Recupero i valori del form
// 4 Calcolo il prezzo
// 5 Calcolo lo sconto
// 6 Mostro il biglietto con i giusti valori


// 1
const nameField = document.getElementById('name');
const kmField = document.getElementById('km');
const ageField = document.getElementById('age');
const confirmField = document.getElementById('c-button');
const resetField = document.getElementById('r-button');

const tiketSectionField = document.getElementById('tiket');
const tiketNameField = document.getElementById('p-name');
const rateField = document.getElementById('rate');
const coachField = document.getElementById('coach');
const pnrField = document.getElementById('pnr');
const priceField = document.getElementById('price');

// 2
confirmField.addEventListener('click', function(){

    // 3
    const nameValue = nameField.value;
    const kmValue = kmField.value;
    const ageValue = ageField.value;

    if(!nameValue || isNaN(kmValue) || kmValue < 10){
        alert('Hai inserito valori non validi');
        return;
    };

    // 4
    let rateName = 'Biglietto standard'
    let finalPrice = 0.21 * kmField;

    // 5
    if(ageValue === 'min'){
        finalPrice *= 0.8;
        rateName = 'Biglietto ridotto minorenni';
    } else if (ageValue === 'over') {
        finalPrice *= 0.6;
        rateName = 'Biglietto ridotto over 65';
    };

    finalPrice = finalPrice.toFixed(2);

    // 6 
    tiketNameField.innerText = nameValue;
    rateField.innerText = rateName;
    coachField.innerText = '9';
    pnrField.innerText = '220703';
    priceField.innerText = finalPrice;

    // tiketSectionField.classList.remove('d-none');
})