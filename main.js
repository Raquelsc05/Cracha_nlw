/*
const LinksSocialMedia = {
  github: "Raquelsc05",
  instagram: "querubinsdigitalmkt",
  facebook: "Querubins-Digital-Marketing-110469664633569",
  youtube: "UCPOSCKLwRt6qrRA3pikg0Yw"
}
  
function changeSocialMediaLinks(){
for(let i of socialLinks.children){
const social = li.getAttribute ('class')

   
li.children[0].hef = `https://${social}.com/${LinksSocialMedia[social]}`
}

}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    
  }
}
  getGitHubProfileInfos()

  /*
