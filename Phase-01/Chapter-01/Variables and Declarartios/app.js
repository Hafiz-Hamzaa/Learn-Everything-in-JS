// JavaScript (JS) ki history short aur simple language mein yeh hai:

// ### 🔹 **JavaScript Ki Paidaish (1995)**

// * **Banaya kisne?**
//   Brendan Eich ne **10 din mein** JavaScript banayi, jab wo **Netscape** company mein kaam kar rahe the.

// * **Pehla naam kya tha?**
//   JavaScript ka pehla naam **Mocha** tha, phir **LiveScript**, aur aakhir mein **JavaScript** rakha gaya — **Java** se inspired naam tha marketing purpose ke liye (lekin Java aur JavaScript alag languages hain!).

// ### 🔹 **Browsers Mein Istemaal**

// * JavaScript ko **web browsers** mein dynamic aur interactive features ke liye use kiya gaya, jaise:

//   * Buttons pe click hone par kuch hona,
//   * Pages reload kiye bina data ka update,
//   * Form validation (e.g., email sahi format mein hai ya nahi).

// ### 🔹 **ECMAScript Standard (1997)**

// * JavaScript ko standard banane ke liye **ECMA International** ne uska ek version banaya:

//   * Isko kaha gaya **ECMAScript**.
//   * Aaj bhi JavaScript ke naye versions isi standard ko follow karte hain.

// ### 🔹 **Important Milestones**

// | Year     | Update                    | Details                                                                                            |
// | -------- | ------------------------- | -------------------------------------------------------------------------------------------------- |
// | 1997     | ECMAScript 1              | Pehla official version                                                                             |
// | 2009     | ES5                       | JSON support, strict mode, etc.                                                                    |
// | 2015     | **ES6 (ECMAScript 2015)** | JavaScript mein **revolutionary** update: `let`, `const`, arrow functions, classes, promises, etc. |
// | Har saal | ES7, ES8, ...             | Har saal naye features add hote hain (e.g., async/await, optional chaining, etc.)                  |

// ### JS interpreted language hai : line by line execute hoti hai
// ### 🔹 **Modern JavaScript**

// * Ab JavaScript sirf browser mein nahi, **server** par bhi chalti hai (e.g., **Node.js** ke through).
// * JavaScript se **full-stack development** possible hai (MERN Stack: MongoDB, Express, React, Node).

// ### 🔹 **Aaj JavaScript:**

// * World ki **sabse popular** programming language hai.
// * Har web developer ke liye **must-learn** language hai.
// * Iske bina **modern websites** possible hi nahi.

// ------- Chapter 01 : Variables and Declarations

// 🧠 What are Variables? : Variables are containers that hold data.
// ---- In JavaScript, you create varaibles  using keywords: var , let , or const .

// var old and risky hota hai : var me ham redeclared and re-assign dono krskte hai : var function scope or global hota hai
// Hoisting in var concept : var ka declaration top per hoist hojata hai or undefined value deta hai

var age  = 30
var age = 32 // OK 

// let modern and safe : let redeclared nh hota but re-assign hojata hai : var block scope hota hai
// Hoisting in let concept : let ki value temporal dead zone me chali jati hai mtlb hoist nh hoti

let name = "ali"
name = "umer" // OK

// const : constant values kai liye use hota hai : const me na re-declare na re-assign krskte hai : const bh block scop hota hai
// const must be initialzed 
// Hoisting in const concept : same here too like let.....

const PI = 3.124
// PI = 3.122 // ERROR:

// Hoisting in const , var , let : It moves all declarations to the top — this is called hoisting.
console.log(a) // undefined
var a = 21

// console.log(b) // refernce error same in const
let b = "school"

// const me ap object ki values ko update krskte hai but ap obj pora change nh krskte
const student = {name:"riya"}
student.name = "ayesha"
// student = {} // ERROR
console.log(student)