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

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`
}

fetch(url)
  .then(Response => Response.json())
  .then(data => {
    userName.textContent = data.name
  })
