$.ajax({
    url: 'https://randomuser.me/api/?results=1000',
    dataType: 'json',
    success: function(data) {
      let randomUser = data["results"][Math.floor(Math.random() * 1001)]
      inputRandomUser(randomUser)
    }
  });


function inputRandomUser(randomUser){
    // data user info
    const userName = document.querySelector(".userName")
    const userEmail = document.querySelector(".userEmail")
    const userBirth = document.querySelector(".userBirth")
    const userLocation = document.querySelector(".userLocation")
    const userPhone = document.querySelector(".userPhone")
    const userPassword = document.querySelector(".userPassword")
    const userImg = document.querySelector(".userImg")

    // box info 
    const text = document.querySelector(".text")
    const infoUser = document.querySelector(".infoUser")
    
    // botoes

    const age = document.querySelector("#ageInfo")
    const locationInfo = document.querySelector("#locationInfo")
    const genderInfo = document.querySelector("#genderInfo")
    const cellInfo = document.querySelector("#cellInfo")


    userName.textContent = randomUser['name']['first']
    userEmail.textContent = randomUser['email']
    userBirth.textContent = randomUser['dob']['date']
    userLocation.textContent = randomUser['location']['country'] + " " + randomUser['location']['state']
    userPhone.textContent = randomUser['phone']
    userPassword.textContent = randomUser['login']['password']

    // box info
    userImg.src = randomUser['picture']['large']
    infoUser.textContent = randomUser['name']['first']


    age.addEventListener("click", function(){
        infoUser.textContent = randomUser['dob']['age']
        text.textContent = "I am"
    })

    locationInfo.addEventListener("click", function(){
        infoUser.textContent = "Latitude: " + randomUser['location']['coordinates']['latitude'] + " " + "Longitude: " + randomUser['location']['coordinates']['longitude']
        text.textContent = "I live in"
    })

    genderInfo.addEventListener("click", function(){
        infoUser.textContent = randomUser['gender']
        text.textContent = "I am"
    })

    cellInfo.addEventListener("click", function(){
        infoUser.textContent = randomUser['cell']
        text.textContent = "I phone number is"
    })
}