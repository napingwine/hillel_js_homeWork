'use strict';

const nameRegexp = /^[a-zA-Z\-]+$/;
const ageRegexp = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const bankCardRegexp = /^(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)$/;

let usersContainer = document.getElementById('users-container__wrapper');
let usersData = JSON.parse(localStorage.getItem('users')) || [];

if (localStorage.getItem('users')) {
  usersContainer.innerHTML = '';
  usersContainer.appendChild(createUsersList(JSON.parse(localStorage.getItem('users')) || []));
} else {
  usersContainer.innerHTML = '';
  localStorage.setItem('users', JSON.stringify(users));
  usersContainer.appendChild(createUsersList(users));
}