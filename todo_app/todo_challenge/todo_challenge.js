const todo = [{
    text : ' order cat food',
    completed : true
}, {
    text : 'clean kitchen ',
    completed : false
}, {
    text : 'buy food ',
    completed : true
}, {
    text : ' do work',
    completed : false
}, {
    text : 'Exercise ',
    completed : true
}]

const inCompleteTodos = todo.filter(function(todos){
    return !todos.completed 
})

const summery = document.createElement('h2')
summery.textContent = `You have ${inCompleteTodos.length} todos left`
document.querySelector('body').appendChild(summery)

todo.forEach(function(todos){
    const p = document.createElement('p')
    p.textContent = todos.text
    document.querySelector('body').appendChild(p)
})

//todo creation
document.querySelector('button').addEventListener('click',function(e)
{
    console.log('Add a new todo')
})