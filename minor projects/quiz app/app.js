// ================= Quiz Data =================
const quizData = [
  {
    question: "JavaScript mein 'let' ka kya use hai?",
    options: [
      "Function banane ke liye",
      "Loop banane ke liye",
      "Variable banane ke liye",
      "DOM access karne ke liye",
    ],
    answer: 2,
  },
  {
    question: "DOM ka full form kya hai?",
    options: [
      "Document Option Model",
      "Data Object Mode",
      "Document Object Model",
      "Display Object Method",
    ],
    answer: 2,
  },
  {
    question: "Kaunsa operator strict equality check karta hai?",
    options: ["==", "===", "!=", "="],
    answer: 1,
  },
  {
    question: "Array ke end mein element add karne ke liye kaunsa method hai?",
    options: ["pop()", "push()", "shift()", "add()"],
    answer: 1,
  },
  {
    question: "JavaScript kis type ki language hai?",
    options: ["Compiled", "Static", "Dynamic", "None"],
    answer: 2,
  },
  {
    question:
      "JavaScript mein 'const' se variable declare karne ke baad kya kar sakte hain?",
    options: [
      "Uski value change kar sakte hain",
      "Uska naam change kar sakte hain",
      "Usko re-declare kar sakte hain",
      "Uski value change nahi kar sakte",
    ],
    answer: 3,
  },
  {
    question: "Kaunsa event tab fire hota hai jab user input deta hai?",
    options: ["click", "submit", "input", "change"],
    answer: 2,
  },
  {
    question: "JavaScript mein null ka matlab kya hai?",
    options: ["Zero", "Undefined", "Khaali object", "Jan bujh kar empty value"],
    answer: 3,
  },
  {
    question: "Kaunsa loop tab tak chalta hai jab tak condition false na ho?",
    options: ["for", "while", "do...while", "if"],
    answer: 1,
  },
  {
    question: "Kaunsi method array ke first element ko remove karti hai?",
    options: ["pop()", "shift()", "unshift()", "slice()"],
    answer: 1,
  },
];

// ================= DOM Elements =================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const emojiEl = document.getElementById("emoji");
const restartBtn = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// ================= Load Question =================
function loadQuestion() {
  selectedOption = null;
  submitBtn.disabled = true;
  optionsEl.innerHTML = "";

  const currentData = quizData[currentQuestion];
  questionEl.textContent = currentData.question;

  currentData.options.forEach((opt, index) => {
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = `opt${index}`;
    input.value = index;

    input.addEventListener("change", () => {
      selectedOption = parseInt(input.value);
      submitBtn.disabled = false;
    });

    const label = document.createElement("label");
    label.htmlFor = `opt${index}`;
    label.textContent = opt;

    li.appendChild(input);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });
}

// ================= Show Result =================
function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;

  const percent = (score / quizData.length) * 100;
  let feedback = "";
  let emoji = "";

  if (percent === 100) {
    feedback = "Excellent! Perfect score! 🔥";
    emoji = "🥇";
  } else if (percent >= 80) {
    feedback = "Great job! 👍";
    emoji = "😄";
  } else if (percent >= 50) {
    feedback = "Good effort! Keep practicing! 💪";
    emoji = "🙂";
  } else {
    feedback = "No problem, try again! 💡";
    emoji = "😅";
  }

  feedbackEl.textContent = feedback;
  emojiEl.textContent = emoji;
}

// ================= Handle Submit =================
submitBtn.addEventListener("click", () => {
  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// ================= Handle Restart =================
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
});

// ================= Start Quiz =================
loadQuestion();
