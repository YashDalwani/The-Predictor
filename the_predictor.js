const scoreDislplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz: ['value','estimate','evaluate'],
        options: ['jury', 'assessment'],
        correct: 2
    },
    {
        quiz: ['close','nearby','next'],
        options: ['adjacent', 'trace'],
        correct: 1
    },
    {
        quiz: ['foreign','national','ethnic'],
        options: ['exotic', 'mad'],
        correct: 1
    },
    {
        quiz: ['assume','insight','weather'],
        options: ['forecast', 'sustainability'],
        correct: 1
    },
    {
        quiz: ['fast','quick','prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    },
    {
        quiz: ['record','catalogue','directory'],
        options: ['list', 'book'],
        correct: 1
    },
    {
        quiz: ['three','shape','pyramid'],
        options: ['elephant', 'triangle'],
        correct: 2
    },
    {
        quiz: ['incredible','astonishing','unbelievable'],
        options: ['amazing', 'anger'],
        correct: 1
    },
    {
        quiz: ['dangerous','uncertain','Risky'],
        options: ['qualified', 'perilous'],
        correct: 2
    },
    {
        quiz: ['lazy','slothful','idle'],
        options: ['fabricate', 'indolent'],
        correct: 2
    },
    {
        quiz: ['quiet','calm','peaceful'],
        options: ['tranquil', 'scared'],
        correct: 1
    },
]

let score = 0
let clicked = []
scoreDislplay.textContent = score

function populateQuestions() {

    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        
        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "🖉"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
            const tipText = document.createElement("p")
            tipText.textContent = tip
            questionBox.append(tipText)
        })
        questionDisplay.append(questionBox)
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex+1, question.correct))

            questionButtons.append(questionButton)
        })
        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    })

    
}

populateQuestions();


function checkAnswer(questionBox, questionButton, option,optionIndex, correctAnswer) {

    if(optionIndex == correctAnswer) {
        score++
        scoreDislplay.textContent = score
        addResult(questionBox, 'Correct!', 'correct')
    }
    else {
        score--
        scoreDislplay.textContent = score
        addResult(questionBox, 'Incorrect!', 'incorrect')
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)


}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('incorrect')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}