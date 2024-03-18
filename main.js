const readline = require('readline-sync');

function guessNumber(min, max, attemptsLeft) {
    if (attemptsLeft <= 0) {
        console.log("Вичерпано усі спроби")
    }
    let userNumber = parseInt(readline.question("Введи номер: "));
    let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (userNumber === RandomNumber) {
        console.log("Вгадали!");
    } else if (userNumber > RandomNumber) {
        console.log("Занадто велике!");
        guessNumber(min, max, attemptsLeft - 1)
    } else if (userNumber < RandomNumber) {
        console.log("Занадто мале!");
        guessNumber(min, max, attemptsLeft - 1)
    } else {
        console.log("Спробуй ще!")
        guessNumber(min, max, attemptsLeft - 1)
    }
    
}



guessNumber(1, 10, 10)