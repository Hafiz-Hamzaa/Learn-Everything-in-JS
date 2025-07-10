// Problems related Variables and Declarartions

// ----- Problem 01 : Declare your name and city using const , and your age using let .
const name = "Hamza" 
const city = "Karachi" 
let age  = 12

// ---- Problem 02 : Try this and observe the result:
let x = 5
// let x = 10 RROR : cannot re-declare block scope 

// ----- Problem 03: Guess the output:
console.log(count) // undefined
var count = 42 

// ---- Problem -04: Create a const object and add a new key to it — does it work?
const obj = {
    name : "Saqib"
}
obj.age = 12
console.log(obj); // It sohuld be work 

// ---- Problem 05 : Try accessing a let variable before declaring it — what error do you see?
// console.log(price) Cannot access 'price' before initialization
let price = 125 

// ---- Problem 06 : Change a const array by pushing a value. Will it throw an error?
const arr = [10,20,30,40,50]
arr.push(60)
console.log(arr); // No not throw an error