// Chapter 07 :  Arrays
// Arrays : Arrays aik box ki trah smjo jo multiple values ko hold krskte hai in a single variable har aik value ka index hota hai or ye index programming 0 se start hota hai isme multiple data types ki value bh store krskte hai JS me 

let fruits = ["apple","banana","orange"]
console.log(fruits[0]) // apple
console.log(fruits[25]) // ye index exist hi nh krta to undefined aiga

fruits[2] = "grapes" // modify krskte hai array mutable hote hai mtlb chnage krkste hai original array me
console.log(fruits)

// ⚙️ Common Array Methods : 🧱 Modifiers (Change original array)

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order

// Dont modify original array : ye newArray deta hai 
let nums = [1,2,3,4,5]
let newArray = nums.slice(1,3)
console.log(newArray) // 2,3 : slice ka second parameter optional hota hai exclusive hota pehle inclusive hota hai or jo bh value dogai us se aik kaam krkai us se pehle tak value dega agr second param na bh lgao to jaha se start huwa hai agai complete extract krlega

// Iteration & Advance Methods : 
let vege = ["carrot","tomato","onion","ladyfinger"]
console.log(vege.sort()) // ye alphabetically arrange krdega 

// agr ap kai array me numbers hote or ap unko sort krte hai to aik masla hojata wo apkai array ki har aik value ko string convert krdete hai ye big blender hai sort me : lekin agr apko apne numbers ko sort krana hai in the form of ascending and desending order me to uskai liye apko iterate krna pary ga comapre krna pary ga chlo dekhte hai krkai kese krte hai 

// ab jitne bh methods me aik cheez common hogi wo ye kai ye aik callback function lete hai 

let numbers = [12,34,10,6,50]
let acNum = numbers.sort((a,b) => {
    return a - b
})
console.log(acNum) // agr descending order me krna hai to bs : b - a krdo

// ---- foreach & map : dono same kaam krte hai har array ki value dete hai ap ukai sth kuch bh calculation perform krskte hai lekin map me aik differnce ye hai kai map hamsehsa apko aik newArr return krta hai mtlb ap peechle array se aik newArray bnate hai 

// foreach
let square = [2,4,6,8,10]
square.forEach(e=>{
    console.log(e*e)
})

// map
let no = [12,23,45,89,100]
let new_arr = no.map(e=>{
    return e * 2
})
console.log(new_arr) // agr apne return kuch bh nh kraya to wo apko undefined dega utni baar jitne apkai peechle array me values hai

// filer : ye bh newarray dega lekin peechle array me se uskai kuch members dega on some based condition
let data = [20,21,24,45,78,90]
let evn = data.filter(e=>{
    return e % 2 === 0
})
console.log(evn)

// reduce : array me sb values ko ak final single value me convert krna ya uska answer lana reduce use krna best hai
let numericalData = [10,20,30,40,50]
let sum = numericalData.reduce((acc,val) => {
    return acc + val
},0)
console.log(sum) // dekho ye do values accept krega first accumlator iski value hamne set krdi 0 or second jo hai value usme array ki har aik value aigi ye accum apni value ko yad rkhte rahe ga jese dekho : accum : 0 hai first value a 10 => 0+10 = 10 accum ab 10 hogya phr second value ai 20 to 10+20 = 30 hogya isi trah ye agai ka flow chale ga

// find,some,every
// find : isme first value agr condition se satidfied hogai array ki to wo first value return krdega
let n = [20,45,78,92,20]
let output = n.find(e=>{
    return e === 20
})
console.log(output)

// some : agr aik bh condition match krgao to true ajai ga
let score = [20,45,78,92,20]
let toper = score.some(e=>{
    return e === 20
})
console.log(toper)

// every : isme sb value ki condition match honi lazmi hai aik bh nh match hoi to fals ajai ga
let marks = [70,95,78,92,60]
let student = marks.every(e=>{
    return e > 65
})
console.log(student) // false isliye qkai sirf last wale kai marks nh bare hai 65 se isliye false sb kai lazmi hon chaiye thai

// ✂️ Destructuring : agr array me first two values nikalni hai to ham destucture krskte hai array 
let myArr = [100,200,300,400]
let [a,b] = myArr // a me aya 100 or b me aya 200 or kaha se nikal rahai hai myArr me se
console.log(a,b);

let vehicles = ["car","bike","bus","cycle"]
let [first,second,,fourth] = vehicles
console.log(first,second,fourth) // isme ap note kia kia mujhe 1st 2nd or third ko uski jaga chori or 4th nikali order bh matter krta hai

// Spread Operator : Arrays ki copy arram se bnata hai hamne dekha tha refernce type me copy nh ban rhi thi sh se jo dosre array me change krte wo pehle me bh change hojata yehi problem solve krta hai spread operator har aik value ko spread krdeta hai

let firstArr = [30,60,90,120,150]
let secondArr = [...firstArr]
console.log(firstArr)
console.log(secondArr)
secondArr.pop()
console.log(secondArr) // isme 150 remove hogya hoga lekin firstArr me 150 nh remove huwa hoga 