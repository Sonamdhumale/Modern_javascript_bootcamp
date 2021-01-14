const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount + .25
    }else{
        throw Error('argument must be a number')
    }
}

try {
    const res = getTip(1)
    console.log(res)
} catch (e){
    console.log('catch block is running')
}

