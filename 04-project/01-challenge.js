// const searchUser = document.getElementById("search-user")
// console.log(searchUser.value)

const USER_NAME = "iamshaunjp";

fetch(`https://api.github.com/users/${USER_NAME}`)
  .then((res) => res.json())
  .then((user) => {
    const userInfo = document.getElementById("user-info");
    const userPhoto = document.getElementById("user-photo");

    const userName = document.createElement("h2");
    const userDescription = document.createElement("h3");
    const userFollowers = document.createElement("p");
    const userFollowing = document.createElement("p");
    const userRepos = document.createElement("p");

    userName.innerText = user.name;
    userPhoto.innerHTML = `<img src = ${user.avatar_url} width="200px">`;

    if (user.bio) {
      userDescription.innerText = user.bio;
    } else {
      userDescription.innerText = "Description not provided";
    }

    userFollowers.innerText = `${user.followers} followers`;
    userFollowing.innerText = `${user.following} following`;
    userRepos.innerText = `${user.public_repos} repos`;

    userInfo.append(
      userName,
      userDescription,
      userFollowers,
      userFollowing,
      userRepos
    );

    fetch(`https://api.github.com/users/${USER_NAME}/repos`)
      .then((res) => res.json())
      .then((repos) => {
        const reposToDisplay = repos.slice(0, 3);

        reposToDisplay.forEach((repo) => {
          const publicRepoLink = document.createElement("a");
          const repoName = repo.name;
          publicRepoLink.innerText = `${repoName}`;
          publicRepoLink.href = `https://github.com/${USER_NAME}/${repoName}`;

          userInfo.append(publicRepoLink);
        });
      });
  });