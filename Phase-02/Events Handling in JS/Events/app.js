// Event : jb bh kuch screen per action huwa wo event hai
// Event listner: action ka kuch reaction huwa wo listener hai 

// Event Listenr : do cheeze leta hai konsa event lgana hai dosra function 
let h1 = document.querySelector("h1")
h1.addEventListener("click",()=>{
    h1.style.color = 'red'
})

let p = document.querySelector("p")
const fnc = ()=>{
    p.style.backgroundColor = "black"
    p.style.color = 'white'
}
p.addEventListener("dblclick",fnc)

// removelistener : mtlb agr me dblclick kro to wo lsitenr na ho 
p.removeEventListener("dblclick",fnc)

// more events:
let inp = document.querySelector("input")
inp.addEventListener("input",(e)=>{
    if(e.data != null){
        console.log(e.data)
    }
})

// change event
let sel = document.querySelector("select")
sel.addEventListener("change",(e)=>{
    document.querySelector("h2").textContent = `${e.target.value} Device Selected`
})

// keydown
let anyThing = document.querySelector(".anyTyped")
window.addEventListener("keydown",(e)=>{
    if(e.key === " "){
        anyThing.textContent = "SPC"
    }else{
        anyThing.textContent = `${e.key}`
        anyThing.style.color = "orange"
    }
})

// upload btn
let file = document.querySelector("#file")
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    file.click()
})
file.addEventListener("change",(e)=>{
    const myFile = e.target.files[0]
    if(myFile){
        btn.textContent = myFile.name
    }
})

// mouse over and mouse out
let box = document.querySelector(".box")
box.addEventListener("mouseover",(e)=>{
    console.log(e)
    box.style.backgroundColor = "yellow"
})
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor = "red"
})

// event object , target , type : (e) => event object jisme details hoti hai ,kis element per target kia gya hai or us ka type kia hai

// mousemove
let boxTwo = document.querySelector(".box-two")
window.addEventListener("mousemove",(e)=>{
    boxTwo.style.top = e.clientY + "px"
    boxTwo.style.left = e.clientX + "px"
})

// Event Bubbling :Jab kisi child element par event listener trigger hota hai, to wo event parent, grandparent aur uske upar ke elements tak "bubble" karke propagate karta hai.
let ul = document.querySelector("ul")
ul.addEventListener("click",(e)=>{
    e.target.classList.toggle("lt")
})