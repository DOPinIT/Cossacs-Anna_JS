//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const language = prompt("Какое официальное название JavaScript");

// if (language === "ECMAScript") {

//  alert("Верно!")
// } else {
//     alert("Не знаете? ECMAScript!")
// }

// language === "ECMAScript" ? alert("Верно!") : alert("Не знаете? ECMAScript!");
// alert(language === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!");


//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10


// const totalMinuts = 69;
// let hours = Math.floor(totalMinuts / 60);
// let minutes = totalMinuts % 60;
// hours = String(hours).padStart(2, '0');
// minutes= String(minutes).padStart(2, '0');

// console.log(`${hours}:${minutes}`);



//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max

// const max = 50;
// const min = 23;
// for(let i=max; i>=min; i-=1){
//     if(i%2!==0){
//        continue;
//     }
//     console.log(i)
// }


//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"


const login = prompt("Введіть логін");

if (login==="Адмін") {
    const password = prompt("Введіть пароль") 
    if (password === "Я главный") {
        console.log("Здравствуйте!")
    } else {
        console.log("Неверный пароль!")
    }
        
} else if (login === null) { 
    console.log("Отменено");
} else {
    console.log("Я вас не знаю")
}

// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 6 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 150, quantity: 100 },
]

function calcTotalPrice(arr, stonesName) {

  for (const stone of arr) {
if (stone.name === stonesName) {
  console.log(stone.name)
return stone.price * stone.quantity;

}

  }
return "Такого каменю не";
}

console.log(calcTotalPrice(stones,'Бриллиант'));