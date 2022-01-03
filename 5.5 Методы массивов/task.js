// Задачи
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
//     Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


//border-left-width в borderLeftWidth

// function camelize(str) {
//     let arr = str.split('-');
//
//     for (let i = 1; i < arr.length; i++) {
//         // преобразовать: первый символ с большой буквы
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//
//     return arr.join('');
// }
//
// alert( camelize( "-border-left-width") );
// alert( camelize("background-color") ); // backgroundColor
// alert( camelize("list-style-image") ); // listStyleImage
// alert( camelize("-webkit-transition") ); // WebkitTransitionы


// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
//     Функция должна изменять принимаемый массив и ничего не возвращать.
//
//     Например:
//

// function filterRangeInPlace(arr, a, b) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//
//        // удалить, если за пределами интервала
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//
// }
//
// let arr = [5, 3, 8, 1, 12];
//
// filterRangeInPlace(arr, 1, 9); // удалены числа вне диапазона 1..4
//
// alert( arr ); // [3, 1]


//Сортировать в порядке по убыванию
//важность: 4
// let arr = [5, 2, 1, -10, 8];
//
// arr.sort();
// //arr.sort((a, b) => b - a);
// arr.reverse();
// // ... ваш код для сортировки по убыванию
//
// alert( arr ); // 8, 5, 2, 1, -10

