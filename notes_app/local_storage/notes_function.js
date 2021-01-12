//read existing nodes from localscope
const getSavedNotes = function(){
    
    const notesJSON = localStorage.getItem('notes') 
    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}

// save data to local storage
const savedNote = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//generate DOM structure fo a note
 const generateNoteDOM = function(note){

const noteEle = document.createElement('p')
        if(note.title.length >0 ){
            noteEle.textContent = note.title
        }else{
            noteEle.textContent = 'unnamed note'
        }
        return noteEle
}  

//render notes
const renderNotes = function(notes, filters){
    const filterNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes1').innerHTML = ' '
    
    filterNotes.forEach(function(note){
        const noteEle = generateNoteDOM(note)
        document.querySelector('#notes1').appendChild(noteEle)
    })
}