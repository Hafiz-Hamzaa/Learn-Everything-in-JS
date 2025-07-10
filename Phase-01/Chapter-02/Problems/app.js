// Problems related Data Types + Type System

// ----- Problem 01 : Predict the Output
console.log(null + 1); // 1
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + false); // 1

// ----- Problem 02: Check types:
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof 123n); // bigint

// ---- Problem 03 : Truthy or Falsy?
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// false

// ----- Problem 04 : Compare with loose vs strict:
console.log(5 == "5"); // true : == ye sirf values ko compare krta hai
console.log(5 === "5"); // falsw // === ye value or type dono stric check krta hai


// ----- Problem 05 :  Reference Behavior
let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Hamza";
console.log(obj1.name); // obj1 me bh change hogya hoga naem ki value

// ----- Problem 06 : typeof Edge Cases
console.log(typeof NaN);        // number
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object
console.log(typeof []);         // object
console.log(typeof function(){}); // function