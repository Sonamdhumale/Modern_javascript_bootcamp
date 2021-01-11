const notes = [{
    title : 'my next trip',
    body : 'I would like to go in spain'
} ,{
    title : 'habbits to work on',
    body : 'exercise, eating a bit better'
}, {
    title : 'office modification',
    body : 'get a new seat',
   
}]

const filters = {
    searchText : ' '
}

const renderNotes = function(notes, filters){
    const filterNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ' '
    
    filterNotes.forEach(function(note){
        const noteEle = document.createElement('p')
        noteEle.textContent =note.title
        document.querySelector('#notes').appendChild(noteEle)
    })
}
renderNotes(notes, filters)

document.querySelector('#create_note').addEventListener('click', function(e){
    e.target.textContent = 'button was clicked'
    //console.log('did this work ?')
})


document.querySelector('#search_text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for_fun').addEventListener('change', function(e){
    console.log(e.target.checked)
})