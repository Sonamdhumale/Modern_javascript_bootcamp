const Hangman = function(word , remaining){
    this.word = word.toLowerCase().split(' ')
    this.remaining = remaining
    this.guessedLetters = ['c']
}
Hangman.prototype.getPuzzle = function(){
    let puzzle = ' '

    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)){
            puzzle = puzzle + letter
        }else{
            puzzle = puzzle + '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('cat' ,2)
console.log(game1)

const game2 = new Hangman('new jersey' , 4)
console.log(game2)