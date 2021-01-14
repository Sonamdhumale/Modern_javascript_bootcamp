const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

const dateOne = new Date('january 13 2017 04:10:44')
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()
if(dateOneTimestamp < dateTwoTimestamp){
    console.log(dateOne.toString())
}else if(dateTwoTimestamp < dateOneTimestamp){
    console.log(dateTwo.toString())
}

// console.log(now.toString())
// console.log(`Year : ${now.getFullYear()}`)
// console.log(`month : ${now.getMonth()}`)
// console.log(`day of the month : ${now.getDay()}`)
// console.log(`hours : ${now.getHours()}`)
// console.log(`minutes : ${now.getMinutes()}`)
// console.log(`seconds : ${now.getSeconds()}`)
// console.log(`milliseconds : ${now.getMilliseconds()}`)
// console.log(`date : ${now.getUTCDate()}`)

// const now = moment()
// now.subtract(1,'week').subtract(20,'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

const birthDay = moment()
birthDay.year(1998).month(11).date(25)
console.log(birthDay.format('MMM D, YYYY'))

