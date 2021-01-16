const counter = () =>{
  let count = 0

    return {
        increment (){
            count++
        },
        decrement (){
            count--
        },
        get(){
            return count
        }
    }
}
const myCounter = counter()
myCounter.increment()
myCounter.increment()
myCounter.increment()
myCounter.decrement()
myCounter.decrement()
console.log(myCounter.get())

//adder

const CreateAdder = (a) => {
    return (b)=>{
        return a + b
    }
}
const add10 = CreateAdder(10)
console.log(add10(-2))
const add5 = CreateAdder(5)
console.log(add5(15))

//tipper
const createTipper = (baseTip) => {
    return (ammount) =>{
        return baseTip * ammount
    }
}
const getTipper = createTipper(100)
console.log(getTipper(.2))