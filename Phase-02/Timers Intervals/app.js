// Timers & Intervals : mtlb kuch time bad mera code chale

// Timers : setTimeout : aik dafa chlta hai
// setTimeout(() => {
//     console.log("hello")
// }, 3000);

// clearTimeout
// let ct = setTimeout(() => {
//     console.log("hello")
// }, 3000);
// clearTimeout(ct)

// Interval : setInterval : bar bar chlta hai
// setInterval(() => {
//     console.log("hello")
// }, 3000); // clear krna ho to use clearInerval()


// Counter creation 10 to 0 using 
let count = 10
setInterval(() => {
    if(count >= 0){
        console.log(count)
        count--
    }
}, 1000);