let notes = []

const filters = {
    searchText : ' '
}

//check for existing stored data
const notesJSON = localStorage.getItem('notes')
 
if(notesJSON !== null){
    notes = JSON.parse(notesJSON)
}
const renderNotes = function(notes, filters){
    const filterNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ' '
    
    filterNotes.forEach(function(note){
        const noteEle = document.createElement('p')

        if(note.title.length >0){
            noteEle.textContent = note.title
        }else{
            noteEle.textContent = 'unnmaed note'
        }

        
        document.querySelector('#notes').appendChild(noteEle)
    })
}
renderNotes(notes, filters)

document.querySelector('#create_note').addEventListener('click', function(e){
    //e.target.textContent = 'button was clicked'
    //console.log('did this work ?')
    notes.push({
        title : '', 
        body : ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes,filters)
})


document.querySelector('#search_text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// document.querySelector('#for_fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })