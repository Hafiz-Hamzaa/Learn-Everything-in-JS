// ---- Chapter 12 to 13 Assignment
// takes two numbers and find the larger one
let num1 = 450
let num2 = 120
if(num1 > num2){
    console.log(`${num1} is the larger one`)
}else if( num2 > num1){
    console.log(`${num2} is the larger one`)
}
else{
    console.log(`${num1} and ${num2} are equals`)
}

// take input number from the user and check whether the number is positive , negative or zero
// let number = +prompt('Enter a number')
// if(number > 0){
//     console.log(`${number} is positive`)
// }else if(number < 0){
//     console.log(`${number} is negative`)
// }else{
//     console.log('number is zero')
// }

// check passwod validate
// let correctPasssowrd = '123456'
// let guessPassword = prompt('Enter a correct password')
// if(guessPassword === ""){
//     alert('please write a password')
// }
// if(correctPasssowrd === guessPassword){
//     console.log("Congratulations! you guess a correct password")
// }else{
//     console.log('Sorry the password is not matched')
// }

// greeting based on condition
var greeting;
var hour = 13
if(hour < 18){
    greeting = 'Good Day'
}else{
    greeting = 'Good Evening'
}
console.log(greeting)

// take time form the user 
// var time = +prompt('Enter a time like this : 1900 - 1200 - 1600')
// if(time < 1200){
//     console.log('Good Morning')
// }else if(time >= 1200 && time < 1700){
//     console.log('Good afternoon')
// }else if(time >= 1700 && time < 2100){
//     console.log('Good evening')
// }else if(time >= 2100 && time < 2359){
//     console.log('Good night')
// }else{
//     console.log("Inavlid time!")
//}

// take str char and check if it is a vowel or not
var str = "e"
if(str.toLowerCase() === "a" || str.toLowerCase() === "e" || str.toLowerCase() === "i" || str.toLowerCase() === "o" || str.toLowerCase() === "u"){
    console.log(true)
}else{
    console.log(false)
}

// takes input and check whether a input is number , upperCase or lowerCase by using ACII Codes
// ASCII Code hamesha aik hi char ka code deta hai 
var input = "a"
var ascii = input.charCodeAt(0) // yaha code mile ga "a" ka
// ab ham check kregai ranges uppercas lowercase or number kai liye
if(ascii >= 65 && ascii <= 90){
    console.log(`${input} is upperCase`)
}else if(ascii >= 97 && ascii <= 122){
    console.log(`${input} is lowerCase`);
}else if(ascii >= 48 && ascii <= 57){
    console.log(`${input} is number`);
}else{
    console.log("not a letter or number");
}

// ---------->>>>>>  Chapter 14 to 16 Assignment
let jsLiteral = []
let jsObject = {}
// let fruits = ['apple','pear','orange','banana']
let numArr = [12,34,56,78,90]
let boolArr = [true,false,false,true]
let mixedArr = [true,'car',123]
let education = ['SSC','HSC','BSCS','CS','IT']
education.forEach((val)=>{
    document.writeln(`${val}<br>`)
})

let studentsName = ['Ali' , 'Zaid' , 'Hamza']
let scores = [320 , 230 , 480]
let totalMarks = 500
let calculateScore = scores.map((score)=>{
    return (score / totalMarks ) * 100
})
console.log(`Score of ${studentsName[0]} is ${scores[0]}. Percentage ${calculateScore[0]}%`)
console.log(`Score of ${studentsName[1]} is ${scores[1]}. Percentage ${calculateScore[1]}%`)
console.log(`Score of ${studentsName[2]} is ${scores[2]}. Percentage ${calculateScore[2]}%`)

// sorting the array in ascending order
let randomNum = [320,230,480,120]
let sorting = randomNum.sort()
console.log(sorting)

let citites = ['Karachi','Lahore','Islamabad','Quetta','Peshawar']
console.log(citites.slice(2,4))

var singleString = ['This','is','my','cat']
console.log(singleString.join(" "))

// --- FIFO(First in First Out)
var fifo = ['sabzi' , 'daal' , 'chawal' , 'roti']
console.log(fifo)
// --- LIFO(Last in First Out)
var lifo = [12 , 90 , 78 , 45]
console.log(lifo.reverse())

var phones = ["iPhone 14", "Samsung Galaxy S23", "OnePlus 11"];
document.writeln("<select>" + "<option>" + phones[0] + "</option>" + "<option>" + phones[1] + "</option>" + "<option>" + phones[2] + "</option>" +"</select>"
    );

// ------ Chapter 17 to 20 Assignments
let emptyMultiDimensional = [[],[],[]]
let multiArr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
for(let i = 1; i < 11; i++){
    console.log(i)
}

// let tableNumber = +prompt('Enter a table number')
// let lengtTable = +prompt('Enter a length of multiplication table')
// for(let i = 1; i <= lengtTable; i++){
//     console.log(`${tableNumber} X ${i} = ${tableNumber * i}`)
//}

let transport = ['car', 'bike' , 'bus' , 'train' , 'aeroplane']
let idx = 0
for(let i = 0; i < transport.length; i++){
    console.log(`${idx++} ${transport[i]}`)
}

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}

let numArray = [120, 78 , 230 , 90]
let max = numArray[0]
for(let val of numArray){
    if(val > max){
        max = val
    }
}
console.log("----------")
console.log(max)

let numArrays = [20, 78 , 230 , 90]
let min = numArrays[0]
for(let val of numArrays){
    if(val < min){
        min = val
    }
}
console.log("----------")
console.log(min)

// ---- Generate the following series :
console.log("-----counting-----")
for(let i = 1; i < 11; i++){
    console.log(i)
}
console.log("----- reverse counting -----")
for(let i = 10; i >=1 ; i--){
    console.log(i)
}
console.log("----- even counting -----")
for(let i = 1 ; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
console.log("----- odd counting -----")
for(let i = 1 ; i <= 10; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}
console.log("----- Series counting -----")
for(let i = 1 ; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`${i}k`)
    }
}

// var bakeryItems = ['cake' , 'cookies' , 'chips' , 'juice' , 'jelly' , 'butter']
// let index = 0
// let userAsk = prompt('Welcome to United Bakery. What do you want to order Sir/Mam')
// if(bakeryItems.includes(userAsk)){
//     alert(`${userAsk} is available at index ${bakeryItems.indexOf(userAsk)} in our bakery`)
// }else{
//     alert(`Sorry ${userAsk} is not available in our bakery`)
// }

// ----- Level Wise Problems
// Easy : Declare a constant `country` with your country's name and use a template literal to print: "I live in [country]."
const countryName = 'Pakistan'
console.log(`I live in ${countryName}`);

// Medium : Use let to store your name and age, then log: "My name is [name] and I am [age] years old."
let myName = 'Owais Sabri'
let userAge = 19
console.log(`My name is ${myName} and I am ${userAge} old.`);

// Hard : Ask the user for their first name and last name using prompt() Store them in let variables
// let first_name = prompt('Enter your first name')
// let last_name = prompt('Enter your last name')
// console.log(`${first_name} ${last_name} welcome!`)

// ----- Real-World Feature Idea 🧪 Welcome Banner in Website
// let userName = prompt('What is your name')
// document.body.innerHTML = `<h1>Welcome ${userName}  Glad to see you here 🎉</h1>`

// ---- Slide 11-15 Homework
let street = 'ABC Road'
let country = 'Pakistan'
let fullMailingAddress = "I live in" +" "+ country + "and my address is" + " "+ street
console.log(fullMailingAddress)
console.log(`I live in ${country} and my address is ${street}`)

let score1 = 50
let score2 = 90
let score3 = 80
let totalScore = score1 + score2 + score3
let avg = totalScore / 3
console.log(`The average of the total score is : ${avg}`)

let plates = 20
let people = 7
let calculateRemainingPlates = plates % people
console.log(calculateRemainingPlates)
calculateRemainingPlates++
console.log(`There are ${calculateRemainingPlates} remaning plates here`)

// Slide 20 Homework:
let fruits = ['apple' , 'banana' , 'mango']
fruits[3] = 80
console.log(fruits)
let firstFruit = fruits[0]
fruits[3] = 'orange'
console.log(fruits) 

// 🔥 Problems (Easy → Medium → Hard)
// Easy : Create an array of 3 vehicles and print the first vehicle
let vehicles = ['car' , 'bike' , 'cycle']
console.log(vehicles[0])

// Create an array of 5 numbers - Change the 3rd number to 99 - Print the updated array and its length
let nums = [20 , 40 , 60 , 80 , 100]
nums[2] = 99
console.log(nums)
console.log(nums.length)

// Ask the user to enter 3 favorite movies (using prompt) - Store them in an array - Print: "Your favorite movies are: [movie1, movie2, movie3]
let favouriteMovies = []
// favouriteMovies[0] = prompt('Enter yor first movies')
// favouriteMovies[1] = prompt('Enter yor second movies')
// favouriteMovies[2] = prompt('Enter yor third movies')
console.log(`Your favourite movies are : ${favouriteMovies}`)

// 🧪 Real-World Feature Idea : To-Do List (Basic Version using Array) - Make an empty array called tasks - Ask user (via prompt) to enter a task - Push it into the array - Show updated tasks in console
let todos = []
let userTask = prompt('Enter a task')
todos.push(userTask)
console.log(todos) 
