var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionBoxEl = document.getElementById('question-container');
var randomQuestion;
var questionIndex;
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame) // when start button is clicked, calls the startGame function.
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})

// Starting the game
function startGame () {
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionBoxEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion () {
    resetField()
    displayQuestion(randomQuestion[questionIndex])
}

function displayQuestion (question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', pickAnswer)
        answerEl.appendChild(button)
    })
}

function pickAnswer(e) {
    var selectButton = e.target
    var correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestion > questionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Next'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetField () {
    nextButton.classList.add('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild
        (answerEl.firstChild)
    }
}

// Questions for Quiz

var questions = [
    {
        question: "Array's in JavaScript can be used to store which of the below?",
        answers: [
                {text: 'Numbers and Strings', correct: true},
                {text: 'Pizza', correct: false},
                {text: 'Pictures', correct: false},
                {text: 'Weblinks', correct: false},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
                {text: 'JavaScript', correct: false},
                {text: 'Terminal/Bash', correct: false},
                {text: 'For loops', correct: false},
                {text: 'Console Log', correct: true},
        ]
    },
]