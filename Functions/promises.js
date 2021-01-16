//callback
const getCallBack = (callback) => {
    setTimeout(() => {
        callback('this is error message from callback')
    },2000)
}

getCallBack((error , data) =>{
    if(error){
        console.log(error)
    }else {
        console.log(data)
    }
})

//promise

const myPromise =(num) => new Promise((resolve , reject)=>{
    setTimeout(() => {
        typeof num === 'number' ? resolve (num *2 ) : reject ('please provide a number')
        
    }, 2000);
})

myPromise(2).then((data)=>{
    myPromise(data).then((data)=>{
        console.log(`promise data :${data}`)
    }, (err)=>{
        console.log(err)
    })

}, (err)=>{
    console.log(err)
})