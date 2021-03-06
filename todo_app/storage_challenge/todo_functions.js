'use strict'

// Fetch existing todos from localStorage
const getSavedTodos =  () =>{
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : [] //using ternary operator
    }catch (e){
        return []
    }

    
    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage
const saveTodos =  (todos) =>{
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove toto by id
const removeTodo = (id)=> {
    const todoIndex = todos.findIndex((todo)=> todo.id == id)
    if(todoIndex > -1){
        todos.splice(todoIndex ,1)
    }
}

//toggle the completed value for a given todo
const toggleTodo = (id)=>{
    const todo = todos.find((todo)=>{
        return todo.id === id
    })
    if(todo){
        todo.completed = ! todo.completed
    }
}


// Render application todos based on filters
const renderTodos =  (todos, filters)=> {
    const filteredTodos = todos.filter( (todo)=> {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter((todo)=> !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) =>{
    const todoEle = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    todoEle.appendChild(checkbox)
    checkbox.addEventListener('change', ()=>{
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos , filters)
    })

    todoText.textContent = todo.text
    todoEle.appendChild(todoText)

    removeButton.textContent = 'x'
    todoEle.appendChild(removeButton)
    removeButton.addEventListener('click', ()=>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    return todoEle
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos)=> {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}