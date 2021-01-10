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
document.querySelector('#create_note').addEventListener('click', function(e){
    e.target.textContent = 'button was clicked'
    //console.log('did this work ?')
})

document.querySelectorAll('#remove_all')[1].addEventListener('click',function(){
    document.querySelectorAll('.note').forEach('click', function(note){
        note.remove()
        
    })
})

