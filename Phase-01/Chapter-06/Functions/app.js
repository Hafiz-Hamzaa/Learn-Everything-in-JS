// --------- Chapter 6 : Functions
// Functions : Function aisi block of code hote hai jinko ham reusable bnaskte hai functions se hmara code mdoular or clean hjata hai or ha functions ka code turant nh chlta jb tk ham usko call na krde 

// Function Declaration or Function Statement
function abc(){
    console.log("Hello")
}
abc() // calling or invoke : isko ap bar bar call krkte ho bs aik dafa code likh dia or multiple time bar call kia re usable hote hai ye

// Function Expression : ye wo hote hai jinko ham varaible me store krskte hai function ko
let fnc = function(){
    console.log("HEYYYEY")
}
fnc() // variable ka name se hi function ko call krte hai

// fat-arrow function : modern js ka part hai 
let ABC = () => {
    console.log("arrow fnc")
}

// Hoisting : Function Statement me hamara function hoist hojata hai but Function Expression me hoist nh hota error deta hai Refernce error :
myFnc()
function myFnc(){
    console.log("Hoisted perfectly")
}

// abcd() // refrence erro : cannot access  abcd before initialization
// let abcd = function(){
//     console.log("Hello")
// }

// IIFE : isme bina function kai name se hi aona code turant execute krna
(function(){
    console.log("IIFE")
})() // USECASE : private varibale kai liye use krkste hai

// retun : jaha se ai ho wahi dal dunga : sum call huwa uski jaga aik value aihogi 15 usko hamne varibale me store krdia return krna ho function se to return keywrod use ho or return function kai ander se hi hota hai return kai bad wala code jaha return lkh dia to mtlb agai kai code nh chale ga

// Paremeters vs Argumnets : parameters mtlb input dena or call kai time kuch values pass krna arguments 
// a , b are the paremetrs and 5 , 10 are the arguments
function sum(a,b) {
return a + b;
}
let total = sum(5, 10); // total is 15
console.log(total)

// early return : hamne if else me isko dekhlia tha 

// Default Parameters : agr input hai lekin koi value agr user ne pass nh ki to ham khud se paremetrs me hi value define krskte hai 
// agr value parametrs me bh hai define or user ne bh di to user ki valye except hogi

function mult(a = 12, b = 3){
    return a * b
}
console.log(mult(10,2))

// Noted : arrow function ko ham use krskte hai but object me nh krskte hai qkai waha this keyword loose hojata hai this keryword kia hota hai inshallah object jb phregai to cover kregai abhi ye baat yad rkho bs

// Rest and Spred Operator : ye bh ES6 ka part hai abhi ham sirf Rest Operator dekhe gai Spred ko Array and Object kai waqt phregai 
// Rest Parameters : Function kai parametrs me apne jaha ... dekhe to wo rest operator hota hai yad rkhne kai liye ye kia krta hai agr argumnets bohat sare hai to hame paramets bh bohat sare lene hogai lekin rest operator se ham sare argumnets rest me ..val is valye me sare values ajai gi or ye aik array hoga thasts it

function rest(...val){
    console.log(val)
}
rest(1,2,3,4,5,6,7,8,9,10) // ham agr shoro ki values ko a , b , c me bh store krkste hai baqi rest jitni bachi usko rest me daldo jese a me 1 agya , 2 me 2 or three me 3 baqi 4 to 10 rest me chale gai example dekho aik or

function values(a,b,c,...val){
    console.log(a,b,c,val)
}
values(1,2,3,4,5,6,7,8,9,10)

// First Class Function : ye wo hote hai jinko ham functions ko value ki tarah treat krskte hai mtlb agr varibale me 12 hai to wo aik value hai or bs kuch nh ham function ko bh value banskte hai variable me or ha paremetr me bh val acceot krkai argumenst me bh function ko pass krskte hai

function func(val){
    val()
}
func(function(){
    console.log("Hello How are you")
})

// High Order Functions : aisi function jo return kre aik or function ya accept kre aik or function parameters me
function hello(fnc){
    fnc()
}
hello(function(){
    console.log("JS is powerful")
}) // ye acccept kr rha hai aik or function 

// Another example :
function JS(){
    return function(){
        console.log("Hello,JS")
    }
}
JS()() // ye do barr call kese huwa smjte hai : aik bar JS ko chalne kai liye or jo ander function likha hai usko call krne kai liye

// Pure vs Impure Function :
// Pure Function : aisa function jo bahar ki values ko change na kre 
let count = 0
function pure(){
    console.log("pure fnc")
}
pure() // ye function ko apne se talooq hai bahar ki koi value change nh hogi is se called pure function

// Impure Function : aisa function jo bahar ki value ko change krde
let Count = 0
function impure(){
    console.log(++Count)
}
impure()

// Lexical Scoping : isme dekho kia ho rha hai ap ne egf kai ander a var bnaya to efg kai scope kai ander tak kahi bh acces krskte hai jo iska jaha tak scope zinda hai waha tak variable bh zinda hai : ab jese hij  kai ander b var hai to ap uskai ander tak hi access krskte aisa nh kai ap usko efg se pehle use kr rahai or aisa bh nh abd use kr rahai jo uski positin jaha tak hai wahi tak wo access hoskte hai yehi hota hai lexical scoping 
function efg(){
    let a = 12
    function hij(){
        let b = 25
        function xyz(){
            let c = 30
        }
    }
}

// Closures : aisa function jo return kre aik or funcction or retur function kai ander kisi bh parent variable ka use ho rha ho dekho example
function parent(){
    let i = 15
    return function(){
        console.log(i)
    }
}
parent()() // dekho jo ander return ho rha hai function wo parent kai kisi variable ka use kr rha hai yehi hota hai closures
