let convertFahrenheitToCelius = function(temp)
{
    let result = (temp - 32)*5/9
    return result
}
let value1 = convertFahrenheitToCelius(32)
let value2 = convertFahrenheitToCelius(68)

console.log(value1)
console.log(value2)