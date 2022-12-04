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

const max = 50;
const min = 23;
for(let i=max; i>=min; i-=1){
    if(i%2!==0){
       continue; 
    } 
    console.log(i)
}