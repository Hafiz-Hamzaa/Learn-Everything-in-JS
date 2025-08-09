// ----- Chapter 5 to 8 Assignment
var a = 10
document.writeln(`The value of a is : ${a}<br>`)
document.writeln('--------------------<br>')
document.writeln(`The value of ++a is : ${++a}<br>`)
document.writeln(`Now The value of a is : ${a}<br><br>`)
document.writeln(`The value of a++ is : ${a++}<br>`)
document.writeln(`Now The value of a is : ${a}<br><br>`)
document.writeln(`The value of --a is : ${--a}<br>`)
document.writeln(`Now The value of a is : ${a}<br>`)
document.writeln(`Now The value of a-- is : ${a--}<br>`)
document.writeln(`Now The value of a is : ${a}<br><br>`)

var x = 2
var y = 1
//            1  -  0  +  1  + 1
var result = --x - --y + ++y + y--
console.log(result) // 3

var userName = prompt("Enter a name :")
alert(`Hello ${userName}, Welcome to my website!`)

var tableNumber = +prompt("Enter a number")
var number = 5
for(let i = 1; i<=10;i++){
    if(tableNumber){
    document.writeln(`${tableNumber} * ${i} = ${tableNumber * i}<br>`)
    }else{
         document.writeln(`${number} * ${i} = ${number * i}<br>`)
    }
}

var subjectOne = 'Math'
var subjectTwo = 'Computer'
var subjectThree = 'Science'
var totalMarksOfEachSubject = 100
var subjectOneMarks = 50
var subjectTwoMarks = 70
var subjectThreeMarks = 90
console.log(`First Subject of Marks Percentage is : ${(subjectOneMarks / totalMarksOfEachSubject) * 100}`)
console.log(`Second Subject of Marks Percentage is : ${(subjectTwoMarks / totalMarksOfEachSubject) * 100}`)
console.log(`Third Subject of Marks Percentage is : ${(subjectThreeMarks / totalMarksOfEachSubject) * 100}`)

// --------- Chapter 9 to 11 Assignment
let cityName = prompt("Enter a city name")
if(cityName.toLowerCase().trim() === "karachi"){
    alert('Welcome the city of lights')
}

let gender = prompt("Enter a gender")
if(gender.toLowerCase().trim() === 'male'){
    console.log(`Good Morning Sir`)
}else if(gender.toLowerCase().trim() === 'female'){
    console.log(`Good Morning Mam`)
}else{
    console.log('others gender')
}

let signalColor = prompt('Enter a single traffic light color')
if(signalColor.toLowerCase().trim() === 'red'){
    console.log("Must Stop")
}else if(signalColor.toLowerCase().trim() === 'green'){
    console.log("Move now")
}else{
    console.log("Ready to move")
}

let fuelRemainingCar = +prompt("What is the remaining fuel in your car ")
if(fuelRemainingCar < 0.25){
    console.log("Plaese refill the fuel in your car")
}else{
    console.log("Nice you have a more remaining fuel in your car")
}

let checkEvenOdd = 12
if(checkEvenOdd % 2 === 0){
    console.log(`${checkEvenOdd} is even`)
}else{
    console.log(`${checkEvenOdd} is odd`)
}

let checkDiv = 30
if(checkDiv % 3 === 0){
    console.log(`${checkDiv} is divisible by 3`)
}else{
    console.log(`${checkDiv} is not divisible by 3`)
}

let temp = +prompt('What is the current temperature in your city')
if(temp > 40){
    alert("It is too hot outside")
}else if(temp > 30){
    alert("The Weather is normal today")
}else if(temp > 20){
    alert("Todays weather is cool")
}else if(temp > 10){
    alert("OMG! Todays Weather is so cool")
} 

let firstNum = +prompt('Enter a first number')
let opt = prompt("Enter operator (+ , - , * , /")
let secondNum = +prompt('Enter a second number')
if(opt === "+"){
    console.log(firstNum+secondNum)
}if(opt === "-"){
    console.log(firstNum-secondNum)
}if(opt === "*"){
    console.log(firstNum*secondNum)
}if(opt === "/"){
    console.log(firstNum/secondNum)
}else{
    console.log('Invalid operator')
}

let secretNumber = 8
let guessNumber = +prompt("Guess the number between 1 to 10")
if(secretNumber === guessNumber){
    console.log('Bingo! Correct Answer')
}else if(guessNumber+1){
    console.log("Close enough to correct the answer")
}

// ----- Run this script whether alert msg displayed or not
var a = 4
if(++a === 5){
    alert('given condition for a var a is true')
}

var b = 82
if(b++ === 83){
    alert('given condition for a var b is true') 
}

var c = 12
if(c++ === 13){
    alert('condition 1 is true')
}
if(c === 13){
    alert('condition 2 is true')
}
if(++c < 14){
    alert('condition 3 is true')
}
if(c === 14){
    alert('condition 4 is true')
}

var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if(totalCost === laborCost + materialCost){
    alert('The cost equals')
}
if(true){
    alert('True')
}

if("car" < "cat"){ // har chracter ka uni code hota hai last chracter different the jese "r":114 unicode iska || "t":116 to 114 < 116 become true
    alert('car is smaller then cat')
}

// ------- Create a Marks Sheet for Student
let subj1 = +prompt('What is your marks in math subject')
let subj2 = +prompt('What is your marks in urdu subject')
let subj3 = +prompt('What is your marks in english subject')
let totalMarksOfAllSubjects = 300
let percentage = (subj1 + subj2 + subj3) / totalMarksOfAllSubjects * 100
console.log(percentage)
let remarks;
if(percentage >= 80){
    console.log("A-one")
    remarks = 'Excellent'
} else if(percentage >= 70){
    console.log('A')
    remarks = 'Good'
} else if(percentage >= 60){
    console.log('B')
    remarks = 'You need to improve'
}else{
    console.log('Fail')
    remarks = 'Sorry'
}
console.log(remarks)

// ------------ Problems Level Wise
// ----- Basic Level Problem : Take a number from the user and calculate a cube of the given number
let num = +prompt('Enter a number')
alert(num ** 3)
// Prompt se ek number lein aur usme + 10, - 5, * 2 ka result step by step console me show karein.
let number = +prompt('Enter a number')
number += 10
console.log(number)
number -= 5
console.log(number)
number *= 2
console.log(number)

// ------- Medium Level Problem
let userName = prompt('Enter your name')
let userAge = +prompt('Enter your age')
alert(`Hello ${userName} ap saal bad ${userAge+5} kai hogai`)

// --- Prompt se 2 numbers lein, unka sum aur average alert karein.
let numberOne = +prompt('Enter a first number')
let numberTwo = +prompt('Enter a second number')
let result = (numberOne + numberTwo) / 2
console.log(result)

// ----- Hard Level Problem : Age Calculator – User se birth year lein aur current year se subtract karke age alert karein.
let birthYear = +prompt('Enter your birth year')
let date = new Date
let currentYear = date.getFullYear()
console.log(currentYear-birthYear);

// -------- Real World Feature : Temperature Converter – User se Celsius temperature lein, Fahrenheit me convert karein (F = C * 9/5 + 32).
let celsiusTemp = +prompt('Enter a Celsius Temperature')
let convertFahre = (celsiusTemp * 9/5 + 32)
console.log(convertFahre)

// ---- Pocket Money Calculator – Prompt se daily pocket money lein, uska 30 din ka total alert karein.
let dailyPocketMoney = +prompt('What is your daily pocket money')
alert(`Your monlthy total pocket money should be : ${dailyPocketMoney * 30}`)