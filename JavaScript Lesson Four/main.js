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