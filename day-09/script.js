let myImage = document.getElementById('myImage')
myImage.addEventListener('mouseover',()=>{
    myImage.setAttribute('src','https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcGhvbmVzfGVufDB8fDB8fHww')
})
myImage.addEventListener('mouseout',()=>{
    myImage.setAttribute('src','https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D')
})

let increment = document.querySelector('.incr')
let decrement = document.querySelector('.decr')
let count = document.querySelector('span')
increment.addEventListener('click',() =>{
    count.innerText++
})
decrement.addEventListener('click',() =>{
    count.innerText--
})