'use strict';

const userList = document.querySelector('.user-list');
const filterBtn = document.getElementById('filter');
const usersArr = [];

async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?results=50');
  const data = await response.json();
  console.log(data.results);
  createUserCard(data.results);
}

function createUserCard(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    // prettier-ignore
    const {name: { first },name: { last }, location : {city}, location : {country}, picture : {large : img}} = user;
    const userEl = document.createElement('li');
    userEl.innerHTML = `
    <img src="${img}" alt="${first}" />
    <div class="user-info">
      <h4>${first + ' ' + last}</h4>
      <p>${city}, ${country}</p>
    </div>`;
    userList.appendChild(userEl);
    usersArr.push(userEl);
  });
}

getUsers();

filterBtn.addEventListener('input', function () {
  const NotSelectedUsers = usersArr.filter(user => !user.innerText.toLowerCase().includes(filterBtn.value.toLowerCase()));

  usersArr.map(user => user.classList.remove('hide'));
  NotSelectedUsers.map(user => user.classList.add('hide'));
});
