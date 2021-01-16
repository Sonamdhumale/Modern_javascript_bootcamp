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

getPuzzle('2').then((puzzle) => {
console.log(puzzle)
}).catch((err) =>{
    console.log(err)})



// getCountry("US").then((country)=>{
//     console.log(country.name)
// }).catch( (err) =>{
//     console.log(err)
// })

getLocation().then((location) => {
   return getCountry(location.country)
}).then((country)=>{
    console.log(country.name)
}).catch(err =>{
    console.log(err)
})