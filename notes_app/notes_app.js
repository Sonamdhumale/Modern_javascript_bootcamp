
// const p =document.querySelector('h1') 
// p.remove()

const ps = document.querySelectorAll('p')
ps.forEach( function (p){
   
   p.textContent = '********'
    //console.log(p.textContent)
    // p.remove()
})

// add new element
const newPara = document.createElement('p')
newPara.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newPara)