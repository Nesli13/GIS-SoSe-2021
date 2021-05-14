console.log("Jellooo");
//console.log(true + true);
console.log(5 + 1);
console.log(5 + "1");
console.log("5" + 1);
//console.log('5' - 1);

//BONUS:
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
// '' macht das gleiche wie "" 
//Strings können nicht multipliziert, dividiert oder subtrahiert werden!

console.log(3 > 2); // -> true
console.log(3 < 2); // -> false
console.log("Aal" < "Zebra"); // -> true

//console.log(0 == false); // -> true 
//console.log("" == false); // -> true 
console.log(false == false); // -> true 

//console.log(0 === false); // -> false
//console.log("" === false); // -> false 
console.log(false === false); // -> true 

let five: number = 5;
console.log(five * five);

let weather: string = "sunny";
console.log(weather);
weather = "dark";
console.log(weather);

let lukasDebt: number = 1000;
lukasDebt = lukasDebt - 50;
console.log(lukasDebt);

let one: number = 1, two: number = 2;
console.log(one + two);

//let name: string = "Lukas";
const greeting: string = "Hello ";
console.log(greeting + name);

prompt("Passwort eingeben");