// const searchUser = document.getElementById("search-user")

const USER_NAME = "iamshaunjp"

fetch(`https://api.github.com/users/${USER_NAME}`)
  .then((res) => res.json())
  .then((user) => {
        const userPhoto = document.getElementById("user-photo")
        const userName = document.getElementById("name")
        const userDescription = document.getElementById("description")
        const userFollowers = document.getElementById("followers")
        const userFollowing = document.getElementById("following")
        const userRepos= document.getElementById("repos")
        
        userName.append(user.name)
        userPhoto.innerHTML = `<img src = ${user.avatar_url} width="200px">`
        if (user.bio) {
            userDescription.append(user.bio)
        } else {
            userDescription.append("Description not provided")
        }

        userFollowers.append(`Followers: ${user.followers}`)
        userFollowing.append(`Following: ${user.following}`)
        userRepos.append(`Repos: ${user.public_repos}`)
        
        fetch(`https://api.github.com/users/${USER_NAME}/repos`)
            .then((res) => res.json())
            .then((repos) => {
                const reposToDisplay = repos.slice(0, 3)
                
                reposToDisplay.forEach((repo) => {
                    const reposLink = document.getElementById("repositories-links")
                    const repoName = repo.name
                    reposLink.innerText = `${repoName}`
                    reposLink.innerHTML = `
                    <a href = https://github.com/${USER_NAME}/${repoName}>${repoName}</a>
                    `
                })
            })



console.log(USER_NAME)
console.log

  })