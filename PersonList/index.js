const button = document.getElementById('1')
const userCard = document.getElementsByClassName('userCard')[0]
const usersList = document.getElementsByClassName('usersList')[0]


/* обычное использование fetch для получения запроса */
function getRandomUser(){
    fetch('https://random-data-api.com/api/v2/users')
        .then(response => response.json())
        .then(response=>addNewUser(response))
        .then((response)=>console.log(response))   
}
/* функция принимает строку, в которой записана дата рождения */
function calcCurrentAge(dataString){
    const currentData = new Date()
    const birthayData = new Date(dataString)
    const years = currentData.getFullYear() - birthayData.getFullYear()

    if (currentData.getMonth()>=birthayData.getMonth()){
        return years
    }
    else{
        return years - 1
    }
 
}

let time = '2003-03-15'
const date = new Date()

let userTime = new Date('2003-03-15')
console.log(userTime.getFullYear())

console.log(date.getFullYear())



const date1 = Date.now()
console.log(date1)


function addNewUser(userData){
    console.log(userData)
    const newCard = userCard.cloneNode(true)

    /* userData = объект нашего пользователя */
    newCard.getElementsByClassName('userName')[0].innerHTML = userData.first_name
    newCard.getElementsByClassName('userAva')[0].src = userData.avatar
    newCard.getElementsByClassName('info_value')[0].innerHTML = calcCurrentAge(userData.date_of_birth)

    usersList.appendChild(newCard)
   
}

button.addEventListener('click',()=>getRandomUser())