const LinksSocialMedia = {
  github: 'RamiroDasan',
  youtube: 'MafiaGames',
  facebook: 'Ramiro.Dasan.sk8',
  instagram: 'Ramiro_Dasan',
  twitter: 'DasanRamiro'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = user.Bio
      userLink.href = data.html.url
      userImage.src = data.avatar.url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
