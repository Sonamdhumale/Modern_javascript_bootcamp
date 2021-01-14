const square = (num) => num*num

// const square = (num) => {
//     return num * num
// }
console.log(square(5))

const person = [{
    name: 'sonam',
    age : 22
}, {
    name : 'priti',
    age : 20
}, {
    name : 'poonam',
    age : 31
}]

// const under30 = person.filter(function(person){
//     return person.age < 30
// })

const under30 = person.filter((person)=> person.age < 30)
console.log('person under the age of 30 :',under30)

//find the person with age 22
const age22 = person.find(person => person.age ===22)
console.log(age22.name) 
