const getPuzzle = async (wordCount) => {
   const response = await fetch('http://puzzle.mead.io/puzzle')
    if(response.status === 200){
        const data =await response.json()
        return data.puzzle
    }else {
        throw new Error ('unable to fetch the puzzle')
    }
}


const getCountry = async (countryCode) =>{
    const response = await fetch('http://restcountries.eu/rest/v2/all')
     if(response.status === 200){
        data = await response.json()
        return data = await data.find((country) => country.alpha2Code === countryCode)
     }else {
         throw new Error ('unable to fetch the page')
     }
 }
 

 const getLocation = async() => {
     const response = await fetch('http://ipinfo.io/json?token=f0ade4b0227c37')
         if(response.status ===200){
             data = await response.json()
             return data
         }else {
             throw new Error ('unalbe to load the data')
         }
     }
//using http request
// new Promise ((request , response)=>{
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             request(country)
//         } else if (e.target.readyStatet === 4) {
//             reject('error occured')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })