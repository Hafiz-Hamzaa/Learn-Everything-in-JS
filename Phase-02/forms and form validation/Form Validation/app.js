// Forms and Form validation --- mtlb hame form ko validate krna hoga kai jese name apka 2 charcter se zada ho ye input filed required hai is trah 

let form = document.querySelector("form")
let nm = document.querySelector("#name")
form.addEventListener("submit",(e)=>{
    e.preventDefault() // form ko submit hone se rokna
    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial"
    }else{
        document.querySelector("#hide").style.display = "none"
    }
    // mostly we generate a regex code to check our emails,name,password etc
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans = emailRegex.test("harsh@123.com")
    console.log(ans) // true beacuse it follows all patterns
})