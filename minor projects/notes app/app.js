// ----- Step 01 :  Selecting Elements from HTML 
let notesApp = document.querySelector(".app-container")
let textArea = document.querySelector("#noteInput")
let btn = document.querySelector("#addNoteBtn")
let notesContainer = document.querySelector("#notesContainer")

// ---- Step 02: Add eventlistener to the button and check if text area is empty show an alert message
btn.addEventListener("click",(e)=>{
    if(textArea.value.trim() === ""){
        alert("please write a note")
        return;
    }

// ---- Step 03: Save Notes on LocalStorage
    let existingNotes = localStorage.getItem("note")
    let noteArray = existingNotes ? JSON.parse(existingNotes):[]
    noteArray.push(`${textArea.value}`)
    localStorage.setItem("note", JSON.stringify(noteArray))

// ---- Step 04: Create Dynamic UI     
    let div = document.createElement("div")
    div.classList.add("note")

    let p = document.createElement("p")
    p.textContent = `${textArea.value}`

// ---- Step 05: Add Delete Button Functionality
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent = "Delete note"

// ---- Step 06: Append all elements in notesApplication
    div.appendChild(p)
    div.appendChild(deleteBtn)
    notesContainer.appendChild(div)

// ---- Step 07: Empty text area box
    textArea.value = ""

// ---- Step 08: Delete individually note through click delete button
    deleteBtn.addEventListener("click",()=>{
    div.remove()
})
})