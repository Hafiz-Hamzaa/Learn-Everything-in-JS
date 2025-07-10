// -------- Chapter 3 : Operators
// --- Operators : Operators are special symbols or keywords in JavaScript used to perform operations on values (operands).
// a + b => isme a or b operands hai or + operator hota hai

// ---- Arithmetic Operaors : + , - , / , * , % , **
let a = 12
let b = 2
console.log(a + b) 
console.log(a % b) // ye remainder deta hai modulus
console.log(a ** b) // exponentiation  12 ki power 2

// --- Assignment Operator : = , += , -= , *= , /= , %= , **=
let x = 5
let y = 2
x += 12 // x become 17

// ----- Logical Operator : && , || , !
true && true // true : and operator me dono condition true honi chahiyee
true || false // true : or operator me aik bh condition true honi chahiye
!(true) // ! not ka mtlb hota hai uska reverse mtlb true hoga to false hoga

// ----- Comparision Operator : == , === , <= , >= , != , !==
let c = 12
let d = "12"
console.log(c == d) // true : iswaja se ye sirf values compare krta hai
console.log(c === d) // false : ye stricter version hai isme type bh check hoti hai

// Unary Operator : ++ , --
let e = 12
e++ // ye post increment hai isme pehle porani value ati hai
console.log(e) // 13  : phr jb e ko agai bulao gai phr value increase hoti hai

// isi trah pre increment hota hai usme pehle value increase hoti hai 
// same post decrement and pre decrement : - decrease krta hai

// ------ Ternary Operator : short hand for if-else....
let age = 19
let result = age > 18 ? "voted" : "not voted"
console.log(result);

// instanceof : ye sirf ye dekkhta hai jese : a instanceof Array : kia a kai ander array hai 
// ye sirf refernce value per work krta hai

// + : agr kisi string kai sth + operator lgado to number me convert krdega
let g = "5";
console.log(+g); // 5 (converted to number)