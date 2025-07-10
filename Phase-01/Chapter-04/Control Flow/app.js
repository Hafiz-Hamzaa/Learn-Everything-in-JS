// ----- Chapter 4 : Control Flow
// Control Flow : ye descide krt hai kai code apka kia return krega decision-making ki traha kaam krta hai kai JS ka code kis direction me chale ga on some based condition ab sb se conditions ko check krne kai liye ham if else if else  ise ham if else ladder jehte hai

let age = 19
if(age >= 18){ // agr if ki condition true hoi to if ka block execute hojai ga wrna else ka block chale ga
    console.log("Voted")
} else{
    console.log("not voted")
}

// ---- if , else if , else : else if ko ap multiple condition agr ho to hr ham else if lgatee hai mtlb aik se zada condition check krni ho
// if (condition) {
// // runs if condition is true
// } else if (anotherCondition) {
// // runs if first was false, second is true
// } else {
// // runs if none are true
// }

// Here is an another example:
let marks = 78;
if (marks >= 90) {
console.log("A");
} else if (marks >= 75) {
console.log("B");
} else {
console.log("C");
}

// 🌀 switch-case : Great for checking one variable against many values. aik value kai base per multple cases match krna 
// switch (value) {
// case value1:
// // code
// break;
// case value2:
// // code
// break;
// default:
// // fallback
// }
// -------------------- break ka keyword isliye lgata hai kai agr hamara case match hojai exit hojai or agr na lgaya to wo agai wale cases bh match krega or agai ka code bh execute krdega so break keyword lgana achaa hai
let fruit = "apple";
switch (fruit) {
case "banana":
console.log("Yellow");
break;
case "apple":
console.log("Red");
break;
default:
console.log("Unknown");
}

// 🔁 Early Return Pattern : Used in functions to exit early if some condition fails.
// mtlb iska apne note kia hamne block nh lgaia if else kai early return krlia ye cleaner bh lgta hai code ko
function score(val){
    if(val >= 90 && val <= 100) return "A+"
    if(val >= 70 && val <= 89) return "A"
    if(val >= 60 && val <= 69) return "B"
    if(val >= 50 && val <= 59) return "C"
    else return "Fail"
}
console.log(score(92))

// ham if me truth or falsy value bh check krkste hai agr koi condition nh hai 
if(0){
    console.log("Truthy")
} else{
    console.log("Falsy") // return Falsy
}

// ----- Nested if : if block kai ander dosra if block jesew box kai ander aik or box
// if (condition1) {
//     if (condition2) {
//         // Executes only if both condition1 and condition2 are true
//     } else {
//         // Executes if condition1 is true but condition2 is false
//     }
// } else {
//     // Executes if condition1 is false
// }

// ----- Real life example
let aged = 20;
let hasVoterID = true;

if (aged >= 18) {
    if (hasVoterID) {
        console.log("You can vote");
    } else {
        console.log("You need a voter ID to vote");
    }
} else {
    console.log("You are underage to vote");
}
