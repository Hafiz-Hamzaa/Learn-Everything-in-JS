// Problem Related Arrays

// Problem 01 : Create an array of student names and print each
let studentNames = ["ali","hamza","usman","umer"]
studentNames.forEach(e=>{
    console.log(e)
})

// Problem 02 : . Filter even numbers from an array
let numbers = [20,24,65,90,120]
let even = numbers.filter(e=>{
    return e % 2 === 0
})
console.log(even);

// Problem 03 : Write a function to reverse an array
function revArr(arr){
    return arr.reverse()
}
console.log(revArr([1,2,3,4,5]))

// Problem 04 : Find the first student with grade A
let grades = ["Grade B","Grade A","Grade C"]
let first = grades.find(e=>{
    return e === "Grade A"
})
console.log(first)

// Problem 05 : countFrquency in array
let arr = [1,2,3,2,4,5,2,4,5,6]
let countFrquency = {}
for(let val of arr){
    if(countFrquency[val]){
        countFrquency[val]++
    } else{
        countFrquency[val] = 1
    }
}
console.log(countFrquency)

// Problem 06 : Map prices to include GST (18%)
let price = [100,200,300,400,500]
let newPrice = price.map(e=>{
    return e * 1.18
})
console.log(newPrice);

// Problem 07 : Reduce salaries to calculate total payroll
let salaries = [30000,40000,50000,60000]
let totalPayroll = salaries.reduce((accum,val) => {
    return accum + val
},0)
console.log(`Total payroll salariies is : ${totalPayroll}`)

// Problem 08 : Destructure first two elements of an array
let arr1 = ["JavaScript","Python","C++","Java"]
let [f1,f2] = arr1
console.log(f1,f2);

// Problem 09 : Use spread to copy and add new item
let array_1 = [120,240,360,480,600]
let array_2 = [...array_1]
console.log(array_1)
array_2.push(720)
console.log(array_2)

// Problem 10 : Use some() to check if any student failed
let check = [30,60,80,90]
let fail = check.some(e=>{
    return e < 40
})
console.log(fail)

// Problem 11 :  map() use karke har fruit ka first letter capital karo
let fruits = ["apple", "banana", "grapes","orange"];
let newFruits = fruits.map((val) => {
    let remainingChar = val.slice(1)
    return val.charAt(0).toUpperCase()+remainingChar
})
console.log(newFruits);

// Problem 12 : filter() use karke un students ko nikalo jinke marks >= 40
let marks = [34, 78, 90, 21, 65, 80];
let passed = marks.filter(e=>{
    return e >= 40
})
console.log(passed)

// Problem 13 :  Problem: Is Any Student a Topper?
let remarks = [70, 55, 92, 88];
let anyTopper = remarks.some(e=>{
    return e >= 90
})
console.log(anyTopper)

// Problem 14 :  Are All Items Numbers?
let items = [1, 2, "3", 4, 5];
let allItems = items.every(e=>{
    return typeof e === numbers
})
console.log(allItems) // qkai 3 aik string hai number nh

// Problem 15 : reduce() se total price nikalo (with 10% GST per item included)
let prices = [120, 250, 360, 440];
let total = prices.reduce((acc, price) => {
    return acc + price * 1.1; 
}, 0);

console.log("Total Price with GST:", total);

// Problem 16 : Destructure karke sirf "css" aur "react" nikaalo
let languages = ["html", "css", "js", "react"];
let [,b,,d] = languages
console.log(b,d)

// Problem 17 : Spread operator se inko merge karo aur middle me 100 insert karo
let x = [1, 2, 3];
let y = [4, 5];
let z = [...x,...y]
console.log(z);
z.splice(2,0,100)
console.log(z);

// Problem 18 :  Sirf unique values ka array return karo
let duplicates = [1, 2, 2, 3, 4, 4, 5]
let unique = []
for(let val of duplicates){
    if(!(unique.includes(val))){
        unique.push(val)
    }
}
console.log(unique)

// Problem 19 : sort() use karke array ko last digit ke base par sort karo
let nums = [42, 31, 74, 83];
let lastDigit = nums.sort((a,b) =>{
    return (a % 10) - (b % 10);
})
console.log(lastDigit)

// Problem 21 : forEach() ya reduce() ka use karke sab names ki total length find karo.
let names = ["Ali", "Hamza", "Usman", "Umer"];
let totalLength = names.reduce((accum,val)=>{
    return accum + val.length
},0)
console.log(totalLength)