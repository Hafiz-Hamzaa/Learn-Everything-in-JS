// Problems Related DOM:

// Problem 01: Select the heading of  page chaneg to its text content
document.querySelector("h1").textContent = 'Welcome to my Website'

// Problem 02: Select all li elem and print their text usig a loopl and change text all lis
let lis = document.querySelectorAll("li")
lis.forEach(element => {
    element.textContent = 'Hello'
});

// Problem 03: when we sue innerText and textContent
// innerText = ye slower hai or jo sirf text visible hota hai ye wo deta hai
// textContent = faster hota hai or ye hidden text bh nikal kr deta hai 

// Problem 04: Add a title attribute to a div dynamically
let div = document.querySelector("div")
div.title = "javascript"

// Problem 05: Create a new list item <li>Add new Task</li> and place it to the end of ul
let create = document.createElement("li")
create.textContent = "new task"
let newTask = document.querySelector(".list-items")
newTask.append(create)

// Problem 06: Count All Paragraphs on Page
let paras = document.querySelectorAll("P")
let count = 0
paras.forEach(e=>{
    count++
})
console.log(`Total Paragraphs : ${count}`)

// Problem 07:  Get All Class Names from Elements
let elements = document.querySelectorAll("*");
elements.forEach(el => {
  if (el.getAttribute("class")) {
    console.log(el.getAttribute("class"));
  }
});

// Problem 08: Change All h2 Texts to Uppercase
let h2 = document.querySelectorAll("h2")
h2.forEach(el=>{
    el.innerText = el.innerText.toUpperCase()
})

// Problem 09: 
// let players = ["Messi", "Ronaldo", "Neymar"];
// let ul = document.createElement("ul");

// players.forEach(player => {
//   let li = document.createElement("li");
//   li.innerText = player;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);

// Problem 10:  Challenge: Build a Grocery List from Array
let grocery = ["rice","sugar","cookies","fruits","vegetables"]
let ul = document.createElement("ul")
grocery.forEach(el=>{
    let li = document.createElement("li")
    li.innerText = el
    ul.appendChild(li)
})
document.body.appendChild(ul)
