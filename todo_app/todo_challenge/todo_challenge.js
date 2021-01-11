const todo = [{
    text : ' order cat food',
    completed : true
}, {
    text : 'clean kitchen ',
    completed : false
}, {
    text : 'buy food ',
    completed : truea
}, {
    text : ' do work',
    completed : false
}, {
    text : 'Exercise ',
    completed : true
}]

const filters = {
    searchText : '',
    hide_completed : false
}

const renderedTodos = function(todos , filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos  = filteredTodos.filter(function(todo){
        if(filters.hide_completed){
                return !todo.completed
        }else{
            return true
        }
    })

    const inCompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed 
    })
    
    document.querySelector('#todos').innerHTML= ''

    const summery = document.createElement('h2')
    summery.textContent = `You have ${inCompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summery)
    
    filteredTodos.forEach(function(todos){
        const p = document.createElement('p')
        p.textContent = todos.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderedTodos(todo, filters)



//todo creation




document.querySelector('#search_text').addEventListener('change', function(e){
    filters.searchText = e.target.value
    renderedTodos(todo, filters)
})

document.querySelector('#new_todo').addEventListener('submit', function(e){
    e.preventDefault()
    todo.push({
        text : e.target.elements.text.value,
        completed : false
    })
    renderedTodos(todo, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide_completed').addEventListener('change', function(e){
    filters.hide_completed=!e.target.checked
    renderedTodos(todo, filters)
})
