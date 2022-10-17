// Создайте функцию, которая будет принимать в себя один 
// аргумент-целое положительное число. Она должна возвращать 
// строку, в которой будут через пробел выведены числа 
// Фибоначчи. Причем, их количество должно быть равно 
// переданному аргументу.

// Если переданный аргумент не число - вернуть пустую 
// строку. Решать без применения рекурсии.


// function number(a) {
//     if (typeof(a) != 'number' || a === 0) {
//         return('');
//     }
//     let n1 = 0;
//     let n2 = 1;
//     let n3;
//     let x = '';
//     for (let i=0; i < a; i++ ) {
//         x += n1 + ' ';
//         n3 = n1;
//         n1 += n2;
//         n2 = n3;        
//     }
//     return (x);
// }

// console.log(number(15));


// Создайте функцию, которая принимает в себя целое число 
// минут и возвращает время в нужном формате строки. (Смотри
//      пример). Обратите внимание на окончание слова "час" -
//       оно меняется в зависимости от цифры. Если вместо 
//       аргумента приходит не число, дробное или 
//       отрицательное число - функция возвращает строку 
//       "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю 
// минутами (10 часов). Так как проверки на большие числа 
// будут раздувать код (33 часа, 31 час, 11 часов и тд).
//  Этого будет достаточно и код будет проверять именно этот 
//  промежуток (1 - 10 часов). Но вы можете реализовать и
//   полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// function time (a) {
//     if (typeof(a) != 'number' || !Number.isInteger(a) || a < 0) {
//         return 'Ошибка,  проверьте данные'
//     }
//     let x = Math.floor(a/60);
//     if (x === 0 || x === 5 || x === 6 || x === 7 || x === 8 || x === 9 || x === 10) {
//         return ('Это ' + x + ' часов ' + a % 60 + ' минут')
//         }
//     if (x === 1) {
//         return ('Это ' + x + ' час ' + a % 60 + ' минут')
//     }
//     if (x === 2 || x === 3 || x === 4) {
//         return ('Это ' + x + ' часа ' + a % 60 + ' минут')
//     }
// }
// console.log(time(0));

// Напишите функцию showExperience, которая будет 
//принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно



// function showExperience (object) {
//     const {skills} = object;
//     const {exp} = skills;
//     return (exp);
// }

// console.log(showExperience(personalPlanPeter));



// Напишите функцию showProgrammingLangs, которая будет принимать
//  в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter) =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества 
// языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            java: '0%'
        },
        exp: '1 month'
    }
};

function showProgrammingLangs(object) {
    const newObj = {...object.skills.programmingLangs};

    for (let huy in newObj) {
        console.log('Язык '+ huy + ' изучен на ' + newObj[huy] );
    }
}

showProgrammingLangs(personalPlanPeter);
