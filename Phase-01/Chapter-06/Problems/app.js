// --- Problems Related Functions : 

// Problem 01 : BMI Calculator
function bmi(weight,height){
    return weight / (height * height)
}
console.log(bmi(35,1.2))

// Problem 02 : Create a greet function with default name
function greet(msg="Hamza"){
    return `Hello ${msg}`
}
console.log(greet())

// Problem 03 : User rest parameter to accept any number of scores and return the total
function score(...val){
    let total = 0
    val.forEach((e) => {
        total += e
    })
    return total
}
let sum = score(90,90,90,90)
console.log(sum);

// Prblem 04 : Use IIFE to show welcome message
(function(){
    console.log("Welcome! You are learning JS")
})()

// Problem 05 : Write a function that returns another function
function parent(){
    return function(){
        console.log("child")
    }
}
parent()()

// Problem 06 : Convert impure function to pure function
// let total = 0
// function addTotal(num){
//     total += num
// }

// Convert above function into pure
let total = 0
function addTotal(num){
    let newTotal = total
    newTotal += num
}

// Problem 07 : Create a closure counter function
function counter(){
    let count = 0
    return function(){
        count++
        return count
    }
}
let c = counter() // c ka apna khud ka count hai
console.log(c())
console.log(c())
console.log(c())
console.log(c())

let d = counter() // d ka apna khud ka count hai
console.log(d())
console.log(d())
console.log(d())

// Problem 08 : Discount Calculator using HOF : qkai ye function return kr rha hai aik or function or closure bh hoogya parent function kai variable ko use bh kr rha hai ye discount calculator re-usable bh hogya
function discountCalculator(originalPrice, discount) {
    let finalPrice;
    return function () {
        finalPrice = originalPrice * (1 - discount / 100);
        return `Final Price after ${discount}% discount on Rs. ${originalPrice} is Rs. ${finalPrice}`;
    }
}

let calc = discountCalculator(1500, 30);
console.log(calc()); // Output: Final Price after 30% discount on Rs. 1500 is Rs. 1050

// Problem 09 : Create a function sumAll(...nums) that returns sum of any number of inputs.
function sumAll(...nums){
    let sumNum = nums.reduce((pre,curr) => {
        return pre + curr
    })
    return sumNum
}
console.log(sumAll(10,20,30,40))

// Problem 10 : Ek arrow function likho square(n) jo number ka square return kare — sirf 1 line me implicit return hona chahiye.
let square = (n) =>  n * n
console.log(square(7))

// Problem 11 : Ek anonymous function ko variable multiply me assign karo jo 2 numbers ko multiply kare. Ab multiply(3, 5) call karne par 15 milna chahiye.
let multiply = function(a,b){
    return  a * b
}
console.log(multiply(3,5))

// Problem 12 : Ek function performTask(taskName, callback) banao jo print kare:
// "Starting task: taskName" Aur callback ko call kare task complete hone ke baad: "Completed: taskName"
function performTask(taskName,callback){
    console.log(`Starting Task : ${taskName}`)
    callback(`${taskName}`)
}
performTask("Homework",function(task){
    console.log(`Completed ${task}`)
})

// Problem 13 : Ek function greetGenerator(name) banao jo return kare ek function — Jab returned function ko call karo to print ho: "Hello, name!"
function greetGenerator(name){
    return function(){
        return `Hello ${name}`
    }
}
console.log(greetGenerator("Hamza")())

// Problem 14 : createCounter() naam ka function likho jo ek function return kare — Har baar us returned function ko call karne pe count 1 se barhta jaye.
function createCounter(){
    let increment = 0
    return function(){
        increment++
        return increment
    }
}
let increaseCount = createCounter()
console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount())