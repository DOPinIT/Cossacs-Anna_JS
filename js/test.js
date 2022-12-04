//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

const language = prompt("Какое официальное название JavaScript");

// if (language === "ECMAScript") {

//  alert("Верно!")
// } else {
//     alert("Не знаете? ECMAScript!")
// }

// language === "ECMAScript" ? alert("Верно!") : alert("Не знаете? ECMAScript!");
alert(language === "ECMAScript" ? "Верно!" : "Не знаете? ECMAScript!");