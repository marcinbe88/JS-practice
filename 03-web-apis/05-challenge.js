fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    console.log(users)
    console.log(users.length)
    function createUserCard() {
      for (let i = 0; i < users.length; i++) {
      const newUserCard = document.createElement("div")
      const newContent = document.createTextNode(`
      ${users[i].name}
      ${users[i].username}
      ${users[i].email}
      ${users[i].address.city}
      `)
      newUserCard.appendChild(newContent)
    
      const currentDiv = document.getElementById("user-card")
      document.body.insertBefore(newUserCard, currentDiv)
      }
    }
    
    createUserCard()
})



