let first = 'number' + 3 + 3 // Результат буде "number33".
// В даному випадку відбуваєтсья конкатинація і значення додаються одне до отного, тобто стають поряд без обчислень.
console.log(first)

let second = null + 3 // Результат буде "3".
// "null" це відсутність значення, отже при конкатинації відсутності до 3 маємо 3.
console.log(second)

let third = 5 && "qwerty" //  Результат буде "qwerty".
// && оператор тобто "And", якщо в двох випадках у нас є True, ми виводемо друге значення,
// якщо хочаб одне false, результат був би false.
console.log(third)

let fourth = +'40' + +'2' + "hillel"; //  Результат буде "42hillel".
// В даному випадку "+" перед рядком
// перетворює рядок в число (по мождливлсті), оскільки у на с "+" перед кожним рядком з числом
// та між нимим також оператор "+", ми додаєсо 2 числа та конкатинує до слова "hillel".
console.log(fourth)

let fifth = '10' - 5 === 6; //  Результат буде "false".
// Тому, що '10' - 5 буде 5, а 5 не дорівнює 6.
console.log(fifth)

let sixth = true + false //  Результат буде "1".
// true = 1, false = 0, 1+0 = 1.
console.log(sixth)

let seventh = '4px' - 3 //  Результат буде "Nan".
// Тому що, '4px' не є цифровим значенням.
console.log(seventh)

let eights = '4' - 3 //  Результат буде "1".
// JS по дефолту переведе  '4' в номерне значення та відніме 3.
console.log(eights)

let ninth = '6' + 3 ** 0; //  Результат буде "61".
// 3 в степені 0 = 1, рядкова шестірка при + виконує конкатинацію, а отже просто ставить поряд чсла а не додає їх.
console.log(ninth)

let tenth = 12 / '6' //  Результат буде "2".
// 12 розділити на 6 буде 2. 6ка переводиться в числове значення
console.log(tenth)

let eleventh = '10' + (5 === 6); //  Результат буде "10false".
// 10 конкатинуєтсья до false, адже 5 не дорівнює 6ти.
console.log(eleventh)

let twelves = null == '' //  Результат буде "false".
// null це пусе значення, а "" є false, в результаті порівняння маємо false.
console.log(twelves)

let thirteenth = 3 ** (9 / 3); //  Результат буде "27".
//Проста математика, 9/3 = 3, 3 в кубі = 27
console.log(thirteenth)

let fourteenth = !!'false' == !!'true' //  Результат буде "true".
//!!'false' - 2чі перетвоюється, а отже маємо fasle a потім true, !!'true' - 2чі перетворюється,
// а отже маємо false a потім знову true.
console.log(fourteenth)

let fifteenth = 0 || '0' && 1 //  Результат буде "1".
// Спочатку виконуємо && в результаті маємо 1, потім виконуємо ||, де повертаємо другий операнд, що є 1.
console.log(fifteenth)

let sixteenth = (+null == false) < 1; //  Результат буде "false".
//У виразі (+null == false) результат буде 1, так як +null = 0, false =0, (+null == false) = true, а true = 1.
console.log(sixteenth)

let seventeenth = false && true || true //  Результат буде "true".
// false && true вертає true  як істину, і true || true маємо true, бо якщо хочаб один був false мали б false.
console.log(seventeenth)

let eighteenth = false && (false || true); //  Результат буде "false".
// false || true вертає true  як істину, і true && false вертає false, бо якщо хочаб один є false маємо false.
console.log(eighteenth)

let nineteenth = (+null == false) < 1 ** 5; //  Результат буде "false".
// +null = 0, fasle = 0, +null == false = true = 1, 1**5 = 1, 1<1 = false
console.log(nineteenth)