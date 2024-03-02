function rectangleArea(a, b) {
    return a * b;
}
function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
}
function cylinderArea(r, h) {
    return 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
}
function printArray(arr) {
    arr.forEach(function(elem) {
        console.log(elem);
    });
}
function createParagraph(text) {
    return `<p>${text}</p>`;
}
function createUlWithLi(text) {
    return `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`;
}
function createUlWithLiCount(text, count) {
    let result = "<ul>";
    for (let i = 0; i < count; i++) {
        result += `<li>${text}</li>`;
    }
    result += "</ul>";
    return result;
}
function createListFromArray(arr) {
    let result = "<ul>";
    arr.forEach(function(elem) {
        result += `<li>${elem}</li>`;
    });
    result += "</ul>";
    return result;
}
function printObjects(objects) {
    objects.forEach(function(obj) {
        console.log(`<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`);
    });
}
function findMinNumber(arr) {
    return Math.min(...arr);
}
function sumArray(arr) {
    return arr.reduce((sum, elem) => sum + elem, 0);
}
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
    return sumUAH / exchangeRate;
}




// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250