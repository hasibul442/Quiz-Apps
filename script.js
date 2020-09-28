const quizData = [
    {
        question: "Eighteen thousandths, written as a decimal, is:",
        a: "0.0018",
        b: "0.018",
        c: "0.18",
        d: "18",
        correct:"a", 
    },
    {
        question:"The next number in the sequence 1, 3, 6, 10 is:",
        a:"12",
        b:"13",
        c:"14",
        d:"15",
        correct:"d" , 
    },
    {
        question:"What is the scientific name of a butterfly?",
        a:"Apis",
        b:"Coleoptera",
        c:"Formicidae",
        d:"Rhopalocera",
        correct:"c" , 
    },
    {
        question:"How hot is the surface of the sun?",
        a:"1,233 K",
        b:"5,778 K",
        c:"12,130 K",
        d:"101,300 K",
        correct:"a" , 
    },
    {
        question:"Who are the actors in The Internship?",
        a:"Ben Stiller, Jonah Hill",
        b:"Courteney Cox, Matt LeBlanc",
        c:"Kaley Cuoco, Jim Parsons",
        d:"Vince Vaughn, Owen Wilson",
        correct:"c"  ,
    },
    {
        question:"What is the capital of Spain?",
        a:"Berlin",
        b:"Buenos Aires",
        c:"Madrid",
        d:"San Juan",
        correct:"b"  ,
    },
    {
        question:"What are the school colors of the University of Texas at Austin?",
        a:"Black, Red",
        b:"Blue, Orange",
        c:"White, Burnt Orange",
        d:"White, Old gold, Gold",
        correct:"b"  ,
    },
    {
        question:"What is 70 degrees Fahrenheit in Celsius?",
        a:"18.8889",
        b:"20",
        c:"21.1111",
        d:"158",
        correct:"b"  ,
    },
    {
        question:"When was Mahatma Gandhi born?",
        a:"October 2, 1869",
        b:"December 15, 1872",
        c:"July 18, 1918",
        d:"January 15, 1929",
        correct:"a"  ,
    },
    {
        question:"How far is the moon from Earth?",
        a:"7,918 miles (12,742 km)",
        b:"86,881 miles (139,822 km)",
        c:"238,400 miles (384,400 km)",
        d:"35,980,000 miles (57,910,000 km)",
        correct:"b"  ,
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});