"use strict"

const API_URL = 'https://api.github.com/users/';

const form = document.getElementById('form')
const searchInput = document.getElementById('search')
const cardCont = document.getElementById('hide')



function CreateCard(user,reposArr) {
        
    const {name, avatar_url, bio ,followers,following, public_repos : repos} = user;

    cardCont.innerHTML = `
    <div class = 'container'>
    <img src="${avatar_url}" alt="profile-img" class="profile" />
    <div class="info">
      <h2 class="username">${name}</h2>
      <p>${bio ? bio : 'Person doesn\'t\ has bio'}</p>
      <div class="statistics">
        <p class="followers">${followers}<strong> Followers</strong></p>
        <p class="followings">${following}<strong> Following</strong></p>
        <p class="repos">${repos}<strong> Repos</strong></p>
      </div>
      <div class="repos">
      <a href="${reposArr[0].html_url}" class="repo" target='_blank'>${reposArr[0].name}</a>
      <a href="${reposArr[1].html_url}" class="repo" target='_blank'>${reposArr[1].name}</a>
      <a href="${reposArr[2].html_url}" class="repo" target='_blank'>${reposArr[2].name}</a>
      <a href="${reposArr[3].html_url}" class="repo" target='_blank'>${reposArr[3].name}</a>
      <a href="${reposArr[4].html_url}" class="repo" target='_blank'>${reposArr[4].name}</a>
      </div
    </div>
    </div>`
}



function createErrorCard(message) {
    cardCont.innerHTML = `<div class='container'><h1>${message}</h1></div>`
}

async function getUser(username) {
    try {
     const {data : userData} = await axios(API_URL + username)
     const repos = await getRepos(username)
     CreateCard(userData,repos)
   
    } catch(error) {
        console.log(error);
        if(error.response?.status == 404) createErrorCard('No profile with this username')
    }
}

async function getRepos(username) {
    try {
        const {data} = await axios(API_URL + username + '/repos?sort=created')
        return data
       } catch(error) {
           console.log(error);
           if(error.response.status == 404) createErrorCard('Cannot fetch repositories')
       }
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const username = searchInput.value;
    if (username) getUser(username)
    searchInput.value = '';
})


