let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    document.querySelector("#email-error").textContent = ""
    document.querySelector("#password-error").textContent = ""

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/

    let isValid = true
    let ansEmail = emailRegex.test(email.value)
    let ansPassword = passwordRegex.test(password.value)

    if(!ansEmail){
        document.querySelector("#email-error").textContent = "Email is incorrect"
        document.querySelector("#email-error").style.display = "initial"
        isValid = false
    }else{
        document.querySelector("#email-error").style.display = "block"
    }
    if(!ansPassword){
        document.querySelector("#password-error").textContent = "Password is incorrect"
        document.querySelector("#email-error").style.display = "initial"
        isValid = false
    }else{
        document.querySelector("#password-error").style.display = "block"
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is Ok"
    }
})