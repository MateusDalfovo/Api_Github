function buscaGithub() {
    let name = document.getElementById("name")
    let qtdrepositories = document.getElementById("qtdRepositories")
    let qtdfollowers = document.getElementById("qtdFollowers")
    let qtduserfollowing = document.getElementById("qtdUserFollowing")
    let linkrepositories = document.getElementById("linkRepositories")
    let img = document.getElementById("img")

    const profile = document.getElementById("profile").value;

    fetch('https://api.github.com/users/' + profile)
        .then(res => res.json())

        .then(data => {
            img.innerHTML = `<img src="${data.avatar_url}">`

            name.value = data.name
            login.value = data.login
            qtdrepositories.value = data.public_repos
            qtdfollowers.value = data.followers
            qtduserfollowing.value = data.following
            linkrepositories.value = data.html_url + "/?tab=repositories"
        })
}