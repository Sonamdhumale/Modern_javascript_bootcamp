//global scope
  //local scope
   // local scope

let temp_convertor = function(temp)
{
    let result = (temp -32) * 5/9 
    let isFreezing = true
    if(temp <=0)
    {
        console.log('It is freezing')
    }
    return result
}
let val = temp_convertor(68)
console.log(val)