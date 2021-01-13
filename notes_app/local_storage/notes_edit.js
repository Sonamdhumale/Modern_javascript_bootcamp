const titltElement = document.querySelector('#note_title')
const bodyElement = document.querySelector('#note_body')
const removeElement = document.querySelector('#remove_note')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('/index.html')
}

titltElement.value = note.title
bodyElement.value = note.body

titltElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updateAt = moment.valueOf()
    saveNotes(notes)
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.updateAt = moment.valueOf()
    saveNotes(notes)
})

removeElement.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('click', function(e){
   if(e.key === 'notes'){
        JSON.parse(e.newValue)
        if(note === undefined){
            location.assign('/index.html')
        }
        
        titltElement.value = note.title
        bodyElement.value = note.body
        
        titltElement.addEventListener('input', function(e){
            note.title = e.target.value
            saveNotes(notes)
        })
    }
})

