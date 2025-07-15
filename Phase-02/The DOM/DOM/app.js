// DOM : Document Object Model : Smjo document pora HTML Page hai Html ka har element aik node hai smjo ham jitne bh elements dekhte hai HTML me wo sb DOM ka part hai .JS me HTML ka har element Object me convert hojata hai . 
// Window Object : ye global hota hai or isi kai ander hmara document hota hai.
// DOM Manupulation: HTML kai elements ko JS me access krna or kuch changes krna called DOM Manupulation....

// DOM Tree Structure : Node Element(HTML element major used in DOM) , Text Node (iska mtlb jb ham enter krte hai to aik space ajata hai ) , Comment Node (koi bh comment bh count hota hai) 

// Selecting Elements by usng DOM : 
document.getElementById("id-ka name aiga yaha jo id set kri hogi") // ye hame kbhi element ki detail dega kbhi tag dekhadega pora
document.getElementsByClassName("class ka name se access krskte ho") // return HTML Collection
// most commonlu used : 
document.querySelector("anything set") // mtlb yaha ap tag name,id,class sb kuch pass krskte ho or ha jese apne 4 classses rkhi or ye use kia to ye ham first elemnt dega but apko sare chaiye same class kai 
document.querySelectorAll("used this") // for getting all classes and return Nodelist just like arrays not array but similar 

// Text change , HTML Change ----- innerText , innerHTML , textContent
document.querySelector("h1").innerText = "Learning DOM Manupulation" // textContent also this work
document.querySelector("h2").innerHTML = "<i>Hey</i>" // write HTML actually
// ye apko object dega jisme h2 ki complete detail mile gi ap waha se kuch bh dekh kr change krkste hai 

let btn = document.querySelector("button")
console.dir(btn); // ye apko object dega jisme btn ki complete detail mile gi ap waha se kuch bh dekh kr change krkste hai 

// get , remove , set ---> attribute
console.log(document.querySelector("p").getAttribute("class")) //get value of attribute
document.querySelector("a").setAttribute("href","https://www.google.com") // change attribute value and also put value of attribute
document.querySelector("#myId").removeAttribute("id") // remove attribute
document.querySelector("img").setAttribute("src","https://tse1.mm.bing.net/th/id/OIP.9uQeXJPOGm7x6d4fFhnXxAHaD4?pid=Api&P=0&h=220")

// Create element , append , prpend , remove
let h5 = document.createElement("h5").textContent = "Hello JS"
document.body.prepend(h5) // pehle append : bad me
btn.remove() // button remove hogya document se 

// node.style => css  apply krna through js
let button = document.querySelector(".btn")
button.style.backgroundColor = "black"
button.style.color = "white"

// classlist : add , remove , toggle : toggle mtlb agr style lagi wi hai to htadega wrna lagadega
document.querySelector("div").classList.add("box")