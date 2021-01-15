const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessedLetters = []
    this.status = 'continue'
}

//logic of remaining attempts
Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.attempts === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'continue'
    }
}

//printing msg
Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'continue') {
        console.log(`Reamaining Attempts : ${this.attempts}`) 
    } else if (this.status === 'failed') {
        console.log( `You cross all the attempts ! Your word is "${this.word.join('')}" `)
    } else {
        console.log('You Won the game :) ')
    }
}

//logic of printing * for input
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle = puzzle + letter
        } else {
            puzzle = puzzle + '*'
        }
    })

    return puzzle
}

//main logic like decrement attempts
Hangman.prototype.makeAttempts = function (guess) {
    guess = guess.toLowerCase()
    const isCorrect = !this.guessedLetters.includes(guess)
    const isWrong = !this.word.includes(guess)

    if (this.status !== 'continue') {
        return
    }

    if (isCorrect) {
        this.guessedLetters.push(guess)
    }

    if (isCorrect && isWrong) {
        this.attempts = this.attempts - 1
    }

    this.calculateStatus()
}

const gameElement = document.querySelector('#game')
const noOfTryElement = document.querySelector('#no_of_try')
const game1 = new Hangman('Cat', 2)

gameElement.textContent = game1.getPuzzle()
noOfTryElement.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAttempts(guess)
    gameElement.textContent = game1.getPuzzle()
    noOfTryElement.textContent = game1.getStatusMessage()
})