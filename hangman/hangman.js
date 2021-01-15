const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('')
    this.attempts = attempts
    this.guessedLetters = []
    this.status = 'continue'
}

//logic of remaining attempts
Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

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
       return `Reamaining Attempts : ${this.attempts}` 
    } else if (this.status === 'failed') {
        return `You cross all the attempts ! Your word is "${this.word.join('')}" `
    } else {
       return 'You Won the game :) '
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