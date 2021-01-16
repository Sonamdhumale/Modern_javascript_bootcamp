const getPuzzle = (wordCount) => {
   return fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    if(response.status === 200){
        return response.json()
    }else {
        throw new Error ('unable to fetch the puzzle')
    }
}).then((data)=>{
 return data.puzzle
})
}

const getCountry = (countryCode) =>{
    return fetch('http://restcountries.eu/rest/v2/all').then((response)=>{
     if(response.status === 200){
         return response.json()
     }else {
         throw new Error ('unable to fetch the page')
     }
 }).then((data)=>{
    return country = data.find((country) => country.alpha2Code === countryCode)
    
 })
 }

 const getLocation =() => {
     return fetch('http://ipinfo.io/json?token=f0ade4b0227c37').then((response)=>{
         if(response.status ===200){
             return response.json()
         }else {
             throw new Error ('unalbe to load the data')
         }
     })
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