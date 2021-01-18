const myPromise =(num) => new Promise((resolve , reject)=>{
    setTimeout(() => {
        typeof num === 'number' ? resolve (num *2 ) : reject ('please provide a number')
        
    }, 2000);
})

const processData = async () => {
    let data = await myPromise(2)
     data= await myPromise(data)
     data= await myPromise(data)
     console.log(data)
    // throw new Error ('something went wrong')
    // return 12
}
processData().then((data)=>console.log('data' ,data)).catch((error)=> console.log(error))