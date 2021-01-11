const para = document.querySelectorAll('p')
para.forEach(function(para) {
    if(para.textContent.includes('the')){
        para.remove()
    }
})