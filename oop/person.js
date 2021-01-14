const Person = function(firstName, lastName, age, likes = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = this.likes
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
        bio += `${this.firstName} likes ${this.likes}`
    })

    return bio
}

Person.prototype.setName = function(fullName){
    const  names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('sonam' , 'dhumale' , '22',['singing' , 'coocking'])
me.setName('abc Dhumale')
console.log(me.getBio())

const person2 = new Person('priti' , 'dhumale' , '20' , [])
console.log(person2.getBio())