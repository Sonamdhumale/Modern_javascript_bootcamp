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

getPuzzle((error, puzzle)=>{
    if(error){
        console.log(`error : ${error}`)
    }else{
        console.log(puzzle)
    }
})

console.log('welcome')
// //for puzzle url
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange' , (e)=>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         console.log(request.status)
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if(e.target.readyState === 4){
//         console.log( ' an error occures in url')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()
 
// //for country code
// const countryCode = "MX"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyStatet === 4) {
//         console.log('Unable to fetch data')
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()