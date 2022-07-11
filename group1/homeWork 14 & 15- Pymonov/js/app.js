'use strict';

let usersContainer = document.getElementById('users-container__wrapper');
let usersData = JSON.parse(localStorage.getItem('users')) || [];

// document.getElementById('load-all-users-from-js').addEventListener('click', () => {
//   usersContainer.innerHTML = '';
//   localStorage.setItem('users', JSON.stringify(users));
//   usersContainer.appendChild(createUsersList(users));
// });

// document.getElementById('load-all-users-from-local-storage').addEventListener('click', () => {
//   usersContainer.innerHTML = '';
//   usersContainer.appendChild(createUsersList(JSON.parse(localStorage.getItem('users')) || []));
//   console.log(JSON.parse(localStorage.getItem('users')));
// });

if (localStorage.getItem('users')) {
  usersContainer.innerHTML = '';
  usersContainer.appendChild(createUsersList(JSON.parse(localStorage.getItem('users')) || []));
  // console.log(JSON.parse(localStorage.getItem('users')));
} else {
  usersContainer.innerHTML = '';
  localStorage.setItem('users', JSON.stringify(users));
  usersContainer.appendChild(createUsersList(users));
}