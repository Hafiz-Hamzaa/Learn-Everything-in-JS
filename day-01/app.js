// ------ Chapter 1 Assignment
// Q1 to Q7
alert('Welcome to my Website!')
alert("Please Enter a password!")
alert("Welcome to JS Land\nHappy Coding!")
alert("Welcome to JS Land")
alert(`Happy Coding\nPrevent this page from additional dialogues`)
// write placement of script tag is just before body close tag

// ------ Chapter 2 Assignment
var fullName = "Hafiz Hamza"
console.log(fullName)

var message = "Hello World!"
alert(message)

var studentData = "Hamza"
var role = "developer"
alert(studentData)
alert(role)

var emailAddress = "abc@gmail.com"
alert(`My email address is ${emailAddress}`)

var book = "A smarter way to learn JavaScript"
alert(`I am trying to learn from the book ${book}`)

var msg = "Yah! I can write HTML content through JS"
document.writeln(msg)

var food = "Pizza\nPizz\nPiz\nPi\nP"
alert(food)
alert("--------- 🙌🙌🙌 ---------")

// ------------------------------------------------------------------

// ---------- Problem Solving Level wise
// ------ Easy level Problem : Declare a variable message, assign "Hello" to it, and show it using alert().
var myMsg = 'Hello'
alert(myMsg);

// ----- Medium Level Problem : : Declare 3 variables: firstName, lastName, fullName. Combine first and last name into fullName using string concatenation. Show it with alert().
var firstName = "Hafiz"
var lastName = "Hamza"
var fullName = firstName +" "+ lastName
alert(fullName)

// ------ Hard Level Problem :  Ask the user their name using prompt() (optional if sir hasn’t taught it yet), then store it in a variable and alert a welcome message like: "Hello Ali! Welcome to JavaScript."
let userName = prompt("Enter a name")
alert(`Hello ${userName} Welcome to JavaScript!`)

// -----  Real World Feature Idea 🧪 Create a simple welcome popup:
alert("Welcome to my Portfolio Website!")
// --- Now store your name and age using variable and log them into console
var name = "Hamza"
var age = 12
console.log(`My name is ${name} and I am ${age} years old`)