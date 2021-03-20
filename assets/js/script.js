var startButton = document.getElementById('start-btn');
var questionBoxEl = document.getElementById('question-container');
var randomQuestion;
var questionIndex;
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame) // when start button is clicked, calls the startGame function.

// Starting the game
function startGame () {
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionBoxEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion () {
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

}

// Questions for Quiz

var questions = [
    {
        question: "Array's in JavaScript can be used to store which of the below?",
        answers: [
                {text: 'Numbers and Strings', correct: true},
                {text: 'Pizza', correct: false}
        ]
    }
]