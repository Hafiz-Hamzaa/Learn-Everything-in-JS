// ----- Chapter 8 : Obejcts
// Objects : key value structure hota hai agr apko aik single enttity kai bare details deni ho use object 
let obj = {
    name:"Hamza",
    age:12,
    role:"developer"
}
let key = "name"
console.log(obj) // object
console.log(obj.age) // Dot Notation se ap key ki value access krskte hai agr wo exist krti ho literally
console.log(obj['role']) // square notation se bh krskte hai aik or khass baat is se ap dynamic values bh value access krkste hai
console.log(obj[key]) // dynamic value acccess krna varibale bnaker is [key] kai ander "name" hi hai jo kai key kai variable me tha 

// Noted :  object ko ap modify bh krskte ho kisi bh value ko or uskai ander new keys bh add krkste ho

// Nesting and Deep Access : Objects inside Objects called nesting and deep acces mtlb deep me jaker access krna key ki values ko qkai hmara object nested hoga 
let user = {
name: "Amit",
address: {
city: "Delhi",
pincode: 110001
}
}; // user or address dono object : NNesting object
console.log(user.address.pincode) // 110001 : yehi to hai deep access

// Looping through Object : for in : ye apko loops kai chapter me smjadia tha ap waha jaker dekh skte hai

// Object Destructing : you can extract values from object 
let student = {
    name:"umer",
    profession:{
        role:"designer",
        work:"remote"
    }
}
let {name} = student
let {role} = student.profession
console.log(name,role)

// Object.keys , Object.entries 
let fruits = {
    apple:"red",
    mango:"yellow",
    grapes:"gren"
}
console.log(Object.keys(fruits)) // ye sb apko keys dedega pore object ki in the form of array
console.log(Object.values(fruits)) // ye sb values dedega in the form of array
console.log(Object.entries(fruits)) // ye apko Array of Array dega

// Spread Operator using Object : ye apko real copy dega or agr dosre me change kia to pehle me nh hoga  
let obj1 = {
    name:"ali",
    age:12,
    role:"coder"
}
let obj2 = {...obj1}

// Deep clone : ab yaha aik masla aiga agr apk object nested hai or ap spread ka use krkai usk real copy nikal rahai ho to nested wale ki copy real nh nikel gi qkai wo ak reference pass krega jiski waja se jo ap change krogai nested me wo pehle wale object me bh change hojai ga

let student1 = {
    name:"Hammad",
    age:23,
    location:{
        city:"karachi"
    }
}
let student2 = {...student1} // agr student2 me city change kri to student 1 me bh change hojai ga lekin is se bachee kese mujhe to bhai real copy hi chaiye kuch bh change na ho chahe wo nested object hi q na ho

let student3 = JSON.parse(JSON.stringify(student1)) // ye kia krta hai phee apkai object ko pora string me convert krdeta hai then phr wapis se real object bnadeta hai parse ki madad se is trah se ap nested object ki bh real copy nikal skte ho ko refernce pass nh hoga

// Optional Chaining : agr koi key ki value access kr rahai ho j kai nh hai to wo apko error degi cannot read properties lekin ham yaha ? lagadegai optional take gar to key sh hai to value dedo wrna error na do to wo apko undefined dedega

let info = {
    name:"Hassan",
    age:23,
    profession:{
        role:"designer"
    }
}
// info.professions.role // yaha aiga eror qkai professions hai isko handle krne kai liye aisa krkste hai
info?.professions?.role // ab yaha error nh aiga undefined ajai ga

// Computed Properties : you can use variable as keys
let keys = "marks"
let myObj = {
    nam:"maaz",
    [keys]:90
}  