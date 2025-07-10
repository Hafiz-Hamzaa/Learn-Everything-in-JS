// ----- Problem Related Object

// Problem 01: Create an object for a book (title, author, price)
let book = {
    tilte:"Harry Potter",
    author:"J.K Rowling",
    price:3000
}

// Problem 02 : Access properties using both dot and bracket
console.log(book.price)
console.log(book['tilte'])

// Problem 03: Write a nested object (user with address and location)
let user = {
    name:"ali",
    age:12,
    location:{
        address:"B-12,Karachi",
        place:"karachi"
    }
}

// Problem 04: Destructure name and age from a student object
let {name,age} = user

// Problem 05 : Convert object to array using Object.entries()
let student = {
    name:"hassan",
    age:23,
    role:"designer"
}
console.log(Object.entries(student))

// Problem 06: Copy an object using spread operator
let obj1 = {name:"ayesha",age:23,city:"karachi"}
let obj2 = {...obj1}

// Problem 07: Create a deep copy of an object with nested structure
let info = {
    name:"umer",
    age:30,
    profession:{
        role:"designer",
        work:"remote"
    }
}
let copy = JSON.parse(JSON.stringify(info))
console.log(info)
console.log(copy);

// Problem 08: Use optional chaining to safely access deep values
const myObj = {
  user: "Jamal",
  address: {
    city: "Karachi"
  }
};
console.log(myObj.address?.city); 


// Problem 09: Use a variable as a key using computed properties
let key = "role"
let Obj = {
    name:"daniyal",
    age:12,
    [key]:"developer"
}

// Problem 10: Destruture the key "first-name " as a variable called firstName
let ob = {
    "first-name":"Umer"
}
let {"first-name":firstName} = ob

// Problem 11: Use Object.entries() to print all key-values pair as : title : JavaScript , duration:4 weeks
let course = {
    tilte:"JavaScript",
    duration:"4 weeks"
}
Object.entries(course).forEach(e=>{
    console.log(`${e[0]} : ${e[1]}`)
})

// Problem 12: Merge Two Objects Without Mutation
let obj_1 = { a: 1, b: 2 };
let obj_2 = { b: 3, c: 4 };
let merge = {...obj_1,...obj_2}
console.log(merge);

// Problem 13: Extract Nested Value Safely
let User = {
  name: "Ali",
  address: {
    city: "Karachi",
    zip: "75000"
  }
};
console.log(User.address?.zips) // undefined 

// Problem 14: Convert Array of Objects into a single object
let arr = [
  { id: 101, name: "Ali" },
  { id: 102, name: "Umer" },
  { id: 103, name: "Hamza" }
];
let result = {}
arr.forEach((item)=>{
    result[item.id] = item.name
})
console.log(result)

// Problem 15: Count Properties in Objects
function countProperties(obj){
    return Object.keys(obj).length
}
console.log(countProperties({a:1,b:2,c:3,d:4}))

// Problem 16: Check if Object is Empty
let o = {}
if(Object.keys(o).length === 0){
    console.log("true")
}
else {
    console.log("false")
}

// Problem 17:  Total Salary Calculation
let salries = { ali: 1000, umer: 2000, sana: 3000 }
let values = Object.values(salries)
let totalAmount = values.reduce((accum,val)=>{
    return accum+val
},0)
console.log(totalAmount)

// Problem 18: Count Students Who Passed
const passed = {
    ali:45,
    hamza:90,
    umer:25,
    hassan:70,
    owais:65
}
let count = 0
for(let key in passed){
    if(passed[key] >= 40){
        count++
    }
}
console.log(count)

// Problems 19: Find largest Product
let products = {
  laptop: 60000,
  phone: 30000,
  tablet: 40000
};
let maxPrice = -Infinity
let topProduct = ""
for(let key in products){
    let price = products[key]
    if(price > maxPrice){
        maxPrice = price
        topProduct = key
    }
}
console.log(topProduct)
