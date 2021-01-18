const gameElement = document.querySelector('#game')
const noOfTryElement = document.querySelector('#no_of_try')
let game1

// gameElement.textContent = game1.getPuzzle()
// noOfTryElement.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAttempts(guess)
   render()
})
const render = () =>{
    gameElement.textContent = game1.getPuzzle()
    noOfTryElement.textContent = game1.getStatusMessage()
}
 
const startGame = async () => {
    const puzzle = await getPuzzle ( '2')
     game1 = new Hangman (puzzle , 5)
     render()
} 

document.querySelector('#reset').addEventListener('click' ,startGame)
startGame()
// getPuzzle('2').then((puzzle) => {
// console.log(puzzle)
// }).catch((err) =>{
//     console.log(err)})



// getCountry("US").then((country)=>{
//     console.log(country.name)
// }).catch( (err) =>{
//     console.log(err)
// })

// getLocation().then((location) => {
//    return getCountry(location.country)
// }).then((country)=>{
//     console.log(country.name)
// }).catch(err =>{
//     console.log(err)
// })