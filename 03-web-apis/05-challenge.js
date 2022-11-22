fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {

    const usersList = document.getElementById("users-list")

    function createUserCard() {
      
      for (let i = 0; i < users.length; i++) {
        const userAll = document.createElement("div")
        const userPicture = document.createElement("div")
        const userInfo = document.createElement("div")
        const nameElement = document.createElement("h2")
        const usernameElement = document.createElement("h3")
        const emailElement = document.createElement("p")
        const cityElement = document.createElement("p")
        const moreInfo = document.createElement("a")

        userPicture.innerHTML = `<img src=https://picsum.photos/80/120?random=${users[i].id}>`;
        nameElement.innerText = users[i].name
        usernameElement.innerText = users[i].username
        emailElement.innerText = users[i].email
        cityElement.innerText = users[i].address.city
        moreInfo.innerText = 'More info...'
        moreInfo.href = "#"

        userInfo.append(
          nameElement,
          usernameElement,
          emailElement,
          cityElement,
          moreInfo
        )

        userAll.append(userPicture, userInfo)
        usersList.append(userAll)
      }
    }
    createUserCard()
})