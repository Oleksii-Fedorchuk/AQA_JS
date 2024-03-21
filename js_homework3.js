//Задача 1: Конвертер валют.
// Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) і код валюти,
// в яку потрібно конвертувати ('EUR', 'UAH', 'GBP'). Функція повинна повертати суму у вказаній валюті,
// використовуючи фіксовані курси валют (наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP).
// Якщо код валюти не підтримується, функція повинна повертати рядок з помилкою.

function convertCurrency(amount, currencyCode) {
    if (currencyCode === "EUR") {
        return console.log(`${amount} доларів це ${amount * 0.9} євро`);
    } else if (currencyCode === "UAH") {
        return console.log(`${amount} доларів це ${amount * 35} гривень`);
    } else if (currencyCode === "GBP") {
        return console.log(`${amount} доларів це ${amount * 0.8} фунтів стергілнгів`);
    } else {
        return console.log("Дана валюта не підтримується!")
    }
}

convertCurrency(10, "UAH")

//Задача 2: Визначення дня тижня.
// Завдання: Створіть функцію getDayOfWeek, яка приймає число від 1 до 7 і повертає назву дня тижня,
// де 1 - це понеділок, а 7 - неділя. Якщо введене число не відповідає жодному дню тижня,
// функція має повертати рядок з помилкою.

function getDayOfWeek(numberOfWeek) {
    if (!isNaN(numberOfWeek)) {
        if (numberOfWeek === 1) {
            return console.log("Понеділок");
        } else if (numberOfWeek === 2) {
            return console.log("Вівторок");
        } else if (numberOfWeek === 3) {
            return console.log("Середа");
        } else if (numberOfWeek === 4) {
            return console.log("Четвер");
        } else if (numberOfWeek === 5) {
            return console.log("П'ятниця");
        } else if (numberOfWeek === 6) {
            return console.log("Субота");
        } else if (numberOfWeek === 7) {
            console.log("Неділя");
        } else {
            console.log("Неправильно введено число")
        }
    } else {
        console.log("Введіть число!")
    }
}


getDayOfWeek(1)

//Задача 3: Знайти число Фібоначчі.
// Завдання: Напишіть функцію fibonacci, що приймає число n як аргумент і повертає n-те число з послідовності Фібоначчі.
// Послідовність починається з 0 (нульовий елемент) і 1 (перший елемент),
// а кожне наступне число є сумою двох попередніх чисел.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(4)); // Виведе 55, якщо n = 10


//Додаткова задача. Вгадай число.
// Напишіть функцію guessNumber,
// яка приймає рядок від користувача через prompt() і порівнює його з випадково згенерованим числом від 1 до 10 (включно).
// Функція має виводити 'Вгадали!', якщо користувач вгадав число, або 'Спробуйте ще раз!', якщо ні.
// Враховуйте перетворення типів та умовні конструкції.
// Також треба додати наступні функціональні можливості:
// Обмежена кількість спроб: Користувач має обмежену кількість спроб, наприклад, 3 спроби, щоб вгадати число.
// Використовувати рекурсію, а не цикли.
// Підказки: Якщо користувач вводить число, яке не співпадає з загаданим, але залишилися спроби, функція надає підказку:
// "занадто велике" або "занадто мале".
// Валідація вводу: Переконайтеся, що користувач ввів дійсне число в потрібному діапазоні (від 1 до 10).
// Якщо введене значення недійсне, прохання ввести число знову не зараховуючи це як спробу.


function guessNumber(min, max, attemptsLeft) {
    if (attemptsLeft <= 0) {
        console.log("Вичерпано усі спроби")
    }
    let userNumber = parseInt(prompt("Введи номер: "));
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