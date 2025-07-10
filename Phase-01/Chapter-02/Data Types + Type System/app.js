// ---- Chapter 2 : Data Types + Type Systems
// --- What are Data Types : JS me har value ki type wo data kiis bh type ka hoskta hai for e.g : string , number , ibj etc.
// --- 2 categories of data types : Primitive Data types vs Reference Types
// Primitive : ye wo types hoti hai jin me ap value ko copy krkste ho mtlb unka real copy leskte ho 
// string , number , undefined , null , boolean , bigint , symbol 
// Reference : isme ap value copy nh krskte isme apko reference milta hai 

// Lets check it : primitive me ham kese copy krte hai 
let a = 12
let b = 12
a = a + 2 // smjo baat ko me ne a ki value copy kri b variable me a kai pas apna 12 hai b kai pas apna 12 hai lekin jb me ne a ki value chnage kri to b ki value 12 hi rahe gi usme change nh hoga ye ha baat

// Lets check it : Refernce me kia hota hai
let arr = [1,2,3]
let arr2 = arr
arr2.pop() // isme ye hoga kai agr apne arr2 me change kia hai to original arr me bh change hoga 

// ----- Primitive Data Types : 
let str = "hello" // '' , "" , `` 
let num = 12 // 12 , 12.5 both are considered number in JS
let isMarried = true // bool value or false also a bool value
let age; // undefined : var declare kia but value assign kri abhi 
let price = null // null : ja bujh kr null value di mtlb khali hai value kuch bh nh
let bigint = 123456789n // bigint : bignumbers hote hai or last me n likhte hai agr bad me isme kuhc add bh krna ho to usme bh n likhna 
bigint = bigint + 2n
let sym = Symbol("unique") // symbol : unique cheezo kai liye use hota hai rarely used 
// ye example hai symbol ki aik isme ab uid ki value overwrite nh hogi agr symbol nh bnate to ho rhi thi
let uid = Symbol("uid")
let obj = {
    uid:1
}
obj[uid] = 2

// ---- Reference Data Types : [] {} () inshallah we will explore this concept later 

// ---- typeof operator : is se ham kisi bh value ka type check krskte hai 
typeof "hello" // string
typeof null // object : ye JS me bug hai 
typeof NaN // number : kuch quirks hai JS ME jiska type same nh milta hai 
// NaN == Nan false qkai NaN aik failed operation hai jese agr ap string ko 3 se multiply kr rahai ho to ye koi sense nh banta jbhi JS isko NaN return krdeta hai 

// ---- JS ka aik engine hota hai V8 engine ye sb kr rha hota hai internally 

// type coercion : JS aik type ki value ko automatically conert krdeta hai jese :
"5" + 1 // 51 : JS ne 1 ko pehle string me convert kia hoga
true + 1 // 2 : JS true ko 1 me convert kre ga

//  Truthy and Falsy Values
// Falsy values in JS : 0 false "" undefined null NaN BAQI jitni bh values ha sb true hai 
// agr check krna ho kisi bh value ka natur to ap lgao val se pehle : !!