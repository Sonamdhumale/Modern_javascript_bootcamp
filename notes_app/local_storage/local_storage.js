const notes = getSavedNotes()

const filters = {
    searchText : ''
}
renderNotes(notes, filters)

document.querySelector('#create_note').addEventListener('click', function(e){
    //e.target.textContent = 'button was clicked'
    //console.log('did this work ?')
    notes.push({
        title : '', 
        body : ''
    })
     savedNote(notes)
     renderNotes(notes,filters)
})


document.querySelector('#search_text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

 document.querySelector('#for_fun').addEventListener('change', function(e){
    console.log(e.target.checked)
 })