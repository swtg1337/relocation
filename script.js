// Создайте функцию, которая будет принимать в себя один 
// аргумент-целое положительное число. Она должна возвращать 
// строку, в которой будут через пробел выведены числа 
// Фибоначчи. Причем, их количество должно быть равно 
// переданному аргументу.

// Если переданный аргумент не число - вернуть пустую 
// строку. Решать без применения рекурсии.


function number(a) {
    if (typeof(a) != 'number' || a === 0) {
        return('');
    }
    let n1 = 0;
    let n2 = 1;
    let n3;
    let x = '';
    for (let i=0; i < a; i++ ) {
        x += n1 + ' ';
        n3 = n1;
        n1 += n2;
        n2 = n3;        
    }
    return (x);
}

console.log(number(15));