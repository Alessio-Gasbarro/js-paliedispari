//Esercizio 2 Pari e Dispari

//Chiedere all'utente se sceglie Pari o Dispari
let userChoice = prompt('Perfavore, scegli Pari o Dispari.').toLowerCase();
console.log('Bene, hai scelto: ' + userChoice);

//Chiedere all'utente un numero da 1 a 5
let userNumber = parseInt(prompt('Perfavore, scegli un numero da 1 a 5.'));
console.log('Bene, hai scelto: ' + userNumber);

//Generazione numero casuale tra 1 e 5 usando Function
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerNumber = getRandomNumber(1, 5);
console.log('Le casualità del cosmo hanno scelto: ' + computerNumber);

//Gestione vittorie, con somma dei numeri, usando Function
function isSumEven(number1, number2){
    let sum = number1 + number2;
    let isEven= false;
    if (sum % 2 == 0){
        isEven = true;
    }
    return isEven;
}

if ((isSumEven(userNumber, computerNumber) && userChoice === 'pari') || (!isSumEven(userNumber, computerNumber) && userChoice === 'dispari')) {
    console.log('Congratulazioni, hai vinto!');
}
else{
    console.log('Mi dispiace, ritenta.');
}