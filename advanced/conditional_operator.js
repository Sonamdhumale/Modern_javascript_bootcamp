// const myAge = 2
// const message = myAge >= 18 ? 'You can vote' : 'You can not vote'
// console.log(message)

const myAge = 22

const showPage = () => {
    return 'showing the page'
}
const showErrorPage = ()=> {
    return 'showing the erorr page'
}
 const message = myAge >=20 ? showPage() : showErrorPage()
 console.log(message)

 const team = ['sonam' , 'priti', 'abc', 'pqr', 'xyz']
 console.log(team.length <= 4 ? `team size : ${team.length}` : 'too many people on your teame')
 