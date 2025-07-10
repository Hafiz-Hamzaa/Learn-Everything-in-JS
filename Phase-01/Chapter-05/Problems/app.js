// Problems Related Loop :

// Problem 01 : Print even numbers between 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Problem 02 : Reverse a string using loop
let str = "hello";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// Problem 03 : Sum of all numbers in an array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let val of arr) {
  sum += val;
}
console.log(sum);

// Problem 04 : Guess number game – use while to ask until correct
let correct = 8
let user = +prompt("Guess a number between (0-10)")
while(user != correct){
    user = +prompt("Try again")
}
console.log("Congratulations! You guess a right number")

// Problem 05 : . Sum of even numbers in an array using forEach
function sumEven(arr) {
  let s = 0;
  arr.forEach((e) => {
    if (e % 2 === 0) s += e;
  });
  return s;
}
let sumEvenNumbers = sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sumEvenNumbers);

// Problem 06 :  Sum of all even numbers from 1 to 100
let total = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}
console.log(total);

// Problem 07 : Count how many vowels are in a string
let string = "JavaScript is fun";
let count = 0;
for (let val of string) {
  if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
    count++;
  }
}
console.log(count);

// Problem 08 : Find largest number in an array
let array = [3,9,1,14,5]
let max = array[0]
for(let val of array){
    if(val > max){
        max = val
    }
}
console.log(max)

// Problem 09 : Check if a number is prime or not
function isPrime(num){
    if(num <= 0) return "Not Prime"
    for(let i = 2; i < num; i++){
        if(num % i === 0) return "Not Prime"
    }
    return "Prime"

}
console.log(isPrime(38))

// Problem 10 : Print a multiplication table (1 to 10) for a given number
function table(val){
    for(let i = 1; i <= 10; i++){
        let table = `${val} X ${i} = ${val * i}`
        console.log(table)
    }
}
table(15)

// Problem 11 : Print Pattern
for(let row = 1; row <= 5; row++){
    let line = ""
    for(let j = 1; j <= row; j++){
        line += " * "
    }
    console.log(line)
}

// Problem 12 : Count digits num = 12345 : count : 5
let num = 12345
let cou = 0
while(num > 0){
    cou++
    num = Math.floor(num / 10)
}
console.log(cou)

// Problem 13 : Sum of Digits Number -- 1234
let no = 1234
let totalSum = 0
while(no > 0){
  let lastDigit = no % 10
  totalSum += lastDigit
  no = Math.floor(no / 10)
}
console.log(totalSum);