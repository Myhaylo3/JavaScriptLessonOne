let myArray = [1, 'Hello', true, { key: 'value' }, [1, 2, 3], null, undefined, 3.14, false, 'World'];

for (let i = 0; i < myArray.length; i++) {
    console.log(`Елемент ${i + 1}:`, myArray[i]);
}

// Об'єкти, що описують книги
const book1 = { title: 'The Great Gatsby', pageCount: 200, genre: 'Fiction' };
const book2 = { title: 'To Kill a Mockingbird', pageCount: 300, genre: 'Drama' };
const book3 = { title: '1984', pageCount: 250, genre: 'Science Fiction' };

// Об'єкти, що описують книги з авторами
const author1 = { name: 'Author 1', age: 35 };
const author2 = { name: 'Author 2', age: 42 };
const bookWithAuthors1 = { title: 'Book with Authors 1', pageCount: 150, genre: 'Mystery', authors: [author1, author2] };

const author3 = { name: 'Author 3', age: 28 };
const author4 = { name: 'Author 4', age: 50 };
const bookWithAuthors2 = { title: 'Book with Authors 2', pageCount: 180, genre: 'Thriller', authors: [author3, author4] };

// Масив користувачів
const users = [
    { name: 'User 1', username: 'user1', password: 'password1' },
    { name: 'User 2', username: 'user2', password: 'password2' },
    { name: 'User 3', username: 'user3', password: 'password3' },
    { name: 'User 4', username: 'user4', password: 'password4' },
    { name: 'User 5', username: 'user5', password: 'password5' },
    { name: 'User 6', username: 'user6', password: 'password6' },
    { name: 'User 7', username: 'user7', password: 'password7' },
    { name: 'User 8', username: 'user8', password: 'password8' },
    { name: 'User 9', username: 'user9', password: 'password9' },
    { name: 'User 10', username: 'user10', password: 'password10' },
];

// Виведення паролів користувачів в консоль
users.forEach(user => {
    console.log(`Пароль користувача ${user.username}: ${user.password}`);
});
//
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
//
//






// Логічне розгалуження для перевірки змінної x:
let x = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// Перевірка до якої четверті години попадає число time:
let time = 37;

if (time >= 0 && time <= 59) {
    if (time < 15) {
        console.log('Перша четверть години');
    } else if (time < 30) {
        console.log('Друга четверть години');
    } else if (time < 45) {
        console.log('Третя четверть години');
    } else {
        console.log('Четверта четверть години');
    }
} else {
    console.log('Число повинно бути в діапазоні від 0 до 59');
}
// Визначення половини (декади) місяця за числом day:
let day = 17;

if (day >= 1 && day <= 31) {
    if (day <= 10) {
        console.log('Перша половина місяця');
    } else if (day <= 20) {
        console.log('Друга половина місяця');
    } else {
        console.log('Третя половина місяця');
    }
} else {
    console.log('Число повинно бути в діапазоні від 1 до 31');
}
// Розклад на тиждень з використанням switch:
let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четвер');
        break;
    case 5:
        console.log('Пятниця');
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;
    default:
        console.log('Неправильний номер дня тижня');
}
// Знаходження та виведення максимального числа:
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(`Максимальне число: ${num1}`);
} else if (num2 > num1) {
    console.log(`Максимальне число: ${num2}`);
} else {
    console.log('Числа рівні');
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x =/ ;
x = x || 'default';
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log(`${coursesAndDurationArray[i].title} - Супер`);
    }
}
