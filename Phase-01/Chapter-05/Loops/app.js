// ----- Loops : repeat hone ko loop kehte hai jo ham manually itni bar code likhte hai wo hame loop help krta hai manually menat or code bh zada nh
// ---- Types of LOOPS : for loop , while loop , do while loop (General loop)

// for loop : for loop me teen statements hoti hai initialize , stoping condition , updation 
for(let i = 0; i < 11; i++){
    console.log(i)
} 

// while loop : is me phele apki conditio check hoti hi
let i = 1
while (i < 11) {
    console.log(i)
    i++
}

// do-whil loop : isme aoka code aik dafa chlta zarror hai chahe condition false q hi na ho
let j = 1
do {
    console.log(j)
    j++
} while (j > 10); 

/* ⛔ break and continue
break : Exit loop completely
continue : Skip current iteration and move to next */
for(let i = 1; i < 51; i++){
    if(i === 31) break
    console.log(i)
}

for(let i = 1; i <= 20; i++){
    if(i === 5) continue
    console.log(i)
}

// for-of : ye array or string kai liye use hota hai mostlu iterable kai liye 
let str = "JavaScript"
for(let char of str){
    console.log(char)
}

// for of for arrays
let fruits = ["apple","banana","grapes","pineapple"]
for(let fruit of fruits){
    console.log(fruit)
}

// for in loop : ye object kai liye use hota hai --- key bh return krta hai or value bh
let obj = {
    name : "Ali",
    age : 21
}
for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
}