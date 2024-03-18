//Задача 1: Класифікація оцінок (вирішується за допомогою if-else)
// Завдання: У вас є оцінка від 1 до 100.
// Напишіть блок коду, який класифікує оцінку: "відмінно" для оцінок від 90 до 100, "добре" для оцінок від 70 до 89,
// "задовільно" для оцінок від 50 до 69, та "незадовільно" для оцінок менше 50.
function markChecker(mark) {
    if (!isNaN(mark) && mark <= 100 && mark >=0) {
        if (mark >= 90 && mark <= 100) {
            console.log("Твоя оцінка: Відмінно!")
        } else if (mark >= 70 && mark <= 89) {
            console.log("Твоя оцінка: Добре!")
        } else if (mark >= 50 && mark <= 69) {
            console.log("Твоя оцінка: Задовільно!")
        } else {
            console.log("Твоя оцінка: Незадовільно!")
        }
    } else {
        console.log("Не правильно введені данні")
    }
}


markChecker(1);


//Задача 2: Вибір дії (вирішується за допомогою switch-case)
// Завдання: У вас є рядок з дією ("додати", "відняти", "помножити", "поділити") і два числа.
// Напишіть блок коду, який виконує обрану дію з цими числами та виводить результат.

let first_number = 1;
let second_number = 2;
let action;

let result = first_number / second_number

switch (result) {
    case first_number + second_number:
        action = "Дія додавання";
        break;
    case first_number - second_number:
        action = "Дія віднімання";
        break;
    case first_number * second_number:
        action = "Дія множення";
        break;
    case first_number / second_number:
        action = "Дія ділення"
        break;
    default:
        action = "Дію не визначено!"
}
console.log(action)


//Задача 3: Перевірка на парність (вирішується за допомогою тернарного оператора)
// Завдання: У вас є число. Використовуйте тернарний оператор для перевірки числа на парність.
// Виведіть "парне", якщо число парне, і "непарне" в іншому випадку.

let number = 11
let numberCheck = (number % 2 === 0) ? "Парне число" : "Непарне число"
console.log(numberCheck)