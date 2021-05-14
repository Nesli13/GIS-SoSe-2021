"use strict";
/*function a1(): void {
    let x: string = "Alles Gute";
    console.log(x);
    func1();
    func2();
    console.log("Alles Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

function func2(): void {
    console.log("Alles Klar?");
}
//Aufgabe2
function a2(): void {
    debugger; let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();


//Aufgabe4
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
    

}

//Aufgabe5
//a
var r: number = 5;
var y: number = 2;
var z: number = r * y;
console.log(z);

//b
console.log(Math.max(0, 150, 30, 20, -8, -200)); // returns 150

//c
Array.from({length: 100}, (_, x ) => console.log(x + 1 ));

//d
for (var i: number = 0; i < 100; i++) {
    var count: number = Math.floor(Math.random() * 100) + 0;
    console.log(count);
}
*/
const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;
//# sourceMappingURL=script.js.map