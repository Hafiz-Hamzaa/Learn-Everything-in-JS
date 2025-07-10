// ------- Problems Related Control Flow

// ---- Problem 01 : Age checker:
function ageChecker(age) {
  if (age <= 12) return "Child";
  if (age >= 13 && age <= 19) return "Teen";
  if (age >= 20 && age <= 59) return "Adult";
  else return "Senior"
}
console.log(ageChecker(12));

// ---- Problem 02 : Weather Advice ----- Use switch-case to print what to wear
let weather = "cold";
switch (weather) {
  case "rainy":
    console.log("wear a raincoat");
    break;
  case "hot":
    console.log("wear light cotton clothes");
    break;
  case "cold":
    console.log("wear a warm jacket");
    break;

  default:
    console.log("wear comfortable clothes suitable for the day.");
}

// ---- Problem 03 : Login message:
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("Denied");
} else if (isLoggedIn || isAdmin) {
  console.log("Access");
}

// ---- Problem 04 : Rock , Paper , Scissor
function rps(user, computer) {
  if (user === computer) return "draw";
  if (user === "rock" && computer === "scissor") return "user win";
  if (user === "paper" && computer === "rock") return "user win";
  if (user === "scissor" && computer === "paper") return "user win";
  else return "computer win";
}
console.log(rps("paper", "scissor"));

// ----- Problem 05 : Build a calculator: ----- Using switch + arithmetic operators
function calculator(a, b, opt) {
  switch (opt) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;

    default:
      console.log("invalid opt")
  }
}
calculator(12,2,"/")

// ---- Problem 06 : Solve this nested if problem:
function canDrive(age,hasLicense){
  if(age >= 18){
    if(hasLicense){
      return "Can Drive"
    } else {
      return "Apply for License"
    }
  } else{
    return "Too young too drive"
  }
}
let result1 = canDrive(20,true)
console.log(result1)
let result2 = canDrive(20,false)
console.log(result2)
let result3 = canDrive(16,true)
console.log(result3)