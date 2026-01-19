const options = document.querySelectorAll(".opt");
const option = document.querySelectorAll(".options");
const next = document.querySelector(".next");
const ques = document.querySelector(".question");
const num = document.querySelector(".num");
const hidden = document.querySelectorAll(".hido");
const head = document.querySelector(".head");
const hr = document.querySelector(".hr");
const Tscore = document.querySelector(".score");
const body = document.querySelector(".quiz-body");
const hidon = document.querySelectorAll(".hidon");
const state = document.querySelector(".state-img");

hidden.forEach((hido) => {
    hido.classList.remove("hido");
})

let index = 0;
let count = 1;
let score = 0;

const question = [
  {
    text: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    Correct: "New Delhi",
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    Correct: "Mars",
  },
  {
    text: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    Correct: "7",
  },
  {
    text: "Which animal is called the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Leopard"],
    Correct: "Lion",
  },
  {
    text: "What is the national bird of India?",
    options: ["Crow", "Peacock", "Parrot", "Sparrow"],
    Correct: "Peacock",
  },
  {
    text: "Which gas do plants need to make food?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    Correct: "Carbon Dioxide",
  },
  {
    text: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    Correct: "7",
  },
  {
    text: "Which is the largest ocean in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
    Correct: "Pacific Ocean",
  },
  {
    text: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    Correct: "Mahatma Gandhi",
  },
  {
    text: "Which shape has 3 sides?",
    options: ["Square", "Circle", "Triangle", "Rectangle"],
    Correct: "Triangle",
  },
];

function loadQuestion() {
  ques.innerText = question[index].text;
  options.forEach((opt, i) => {
    opt.innerText = question[index].options[i];
    opt.style.background = "";
    opt.disabled = false;
    opt.style.cursor = "pointer";
  });
  next.classList.add("hidden");
}

loadQuestion();

options.forEach((opt) => {
  opt.addEventListener("click", () => {
    if (opt.innerText === question[index].Correct) {
      opt.style.background = "#2ecc71";
      score++;
    } else {
      opt.style.background = "#f44336";
      options.forEach((btn) => {
        if (btn.innerText === question[index].Correct) {
          btn.style.background = "#2ecc71";
        }
      });
    }

    options.forEach((btn) => (btn.disabled = true));
    next.classList.remove("hidden");
  });
});

next.addEventListener("click", () => {
  if (index < question.length - 1) {
    index++;
    count++;
    num.innerText = count;
    loadQuestion();
  }
  else {
    ShowScore();
  }
});

function ShowScore() {
    next.classList.add("hidden");
    hidden.forEach((hido) => {
        hido.classList.add("hido");
    })

    hidon.forEach((hidoon) => {
        hidoon.classList.remove("hidon");
    });

    if (score <= 7 && score > 4) {
        state.src = "3.svg";
    }
    else if (score <= 4) {
        state.src = "5.svg";
    }
    head.innerText = "Your Score";
    head.style.textAlign = "center";
    hr.style.height = "10px";
    hr.style.background = "#000";
    Tscore.style.marginTop = "40px";
    body.style.padding = "10px 50px 50px 50px";
    Tscore.innerText = score;

}
