const links_social_media = {
  github: 'gab-alb',
  youtube: 'channel/UCIq6dyKsXTNJpPhLgOorNjg',
  facebook: 'pumax.lima',
  instagram: 'dormidesculpa',
  twitter: 'maykbrito'
}

function changeLinks_Social_Media() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

changeLinks_Social_Media()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
