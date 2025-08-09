// ---- Chapter 3 Assignment
var age = 24
alert(age)

var n = 15
alert(`You have visited this site ${n} times`)

var birthYear = 20002
document.writeln(`My birth year is ${birthYear}<br>Data typed of my variable is ${typeof birthYear} <br>`)

var visitorName = "John Doe"
var productTitle = "T-shirt"
var productQuantity = 5
document.writeln(`${visitorName} ordered ${productQuantity} ${productTitle} on XYZ Clothing Store`)

// ---- Chapter 4 Assignment
var name , fruit , msg
// ---- var myName var my_name var _myName var $myName var Myname
// ----- var 1age var %age var #age var my-age var my age

// -------------  Problems Level Questions
// ------- Easy Level Problem :  Declare two variables, one with a number and one with a string. Use + to combine them. What is the result?
var age = 30
var msg = "Your age is:"
var finalResult = msg+age
console.log(finalResult)

// -----  Medium Problem : Prompt the user for their age (remember it’s a string). Convert it to a number and add 5 to it. Show result using alert.
var askUser = +prompt("What is your age")
var msg = `Your age is : ${askUser+5}`
alert(msg)

// -----  Hard Problem : Ask the user for two values via prompt(), add them. First show result without conversion, then convert both to numbers and show result again.
var val1 = +prompt("Enter a first value")
var val2 = +prompt("Enter a second value")
var result = val1+val2
console.log(result)

// ------- 🌍 Real World Feature Idea: Simple User Info Logger
var userName = prompt("Enter your name :")
var userAge = +prompt("Enter your age :")
alert(`Hello ${userName} , You are ${userAge} years old!`)