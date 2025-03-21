//Esercizio parola Palindroma

//Richiesta
let word = prompt('Inserire parola Palindroma');

//CHECK Parola Palindroma
function isPalindrome(string) {
    let lowerCaseWord = string.toLowerCase();
    let reverseWord = lowerCaseWord.split('').reverse().join('');
    if (lowerCaseWord === reverseWord) {
        console.log('Perfetto! Questa parola è Palindroma!');
    }
    else{
        console.log('Hey! Questa parola non è Palindroma!');
    }
}

isPalindrome(word);