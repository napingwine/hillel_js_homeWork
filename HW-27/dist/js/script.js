const API_URL = "https://6311e835f5cba498da8807bf.mockapi.io/hw25/students/";
const headerColumns = ['Name', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'DEL'];

const renderTable = elementID => {
  const usersTable = document.getElementById(elementID);
  usersTable.innerHTML = '';
  usersTable.append(createTableHeader(headerColumns));
  getUsers().then(users => {
    users.map(el => usersTable.append(userRowRender(el, deleteUser, updateUser, renderTable, elementID)));
  });
};

renderTable('users-list');
document.body.append(addUserForm(addUser, renderTable, 'users-list'));
async function getUsers() {
  return await (await fetch(`${API_URL}`)).json();
};

async function deleteUser(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors"
  };
  return await fetch(`${API_URL}${id}`, options);
};

async function updateUser(user) {
  const options = {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors"
  };
  return await fetch(`${API_URL}${user.id}`, options);
};

async function addUser(user) {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors"
  };
  return await fetch(`${API_URL}`, options);
};
function createTableHeader(arr) {
  const header = document.createElement('tr');
  const headerValues = arr;
  headerValues.map(el => {
    const th = document.createElement('th');
    th.innerText = el;
    header.append(th);
  });
  return header
};

const userRowRender = (user, deleteUser, updateUser, renderTable, elementID) => {
  const tr = document.createElement('tr');
  const name = document.createElement('td');
  name.innerText = user.name;
  tr.append(name);
  user.marks.map((el, i) => {
    const td = document.createElement('td');
    const mark = document.createElement('input');
    mark.setAttribute('type', 'number')
    mark.addEventListener('blur', (e) => {
      user.marks[i] = e.target.value;
      updateUser(user).then(res => { if (res.status >= 200 && res.status < 400) { renderTable(elementID) } });
    });
    mark.value = el;
    td.append(mark);
    tr.append(td);
  });
  const delBtnTD = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.innerText = 'del'
  delBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteUser(user.id).then(res => {
      if (res.status >= 200 && res.status < 400) {
        console.log(res.status);
        renderTable(elementID);
      }
    });
  });
  delBtnTD.append(delBtn);
  tr.append(delBtnTD);
  return tr;
};

function addUserForm(addUser, renderTable, elementID) {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.setAttribute('name', 'name');
  input.setAttribute('required', true);
  const button = document.createElement('button');
  button.innerText = 'add';
  button.addEventListener('click', e => {
    e.preventDefault();
    addUser({ name: form.name.value, marks: Array.from({ length: 10 }, () => 0) })
      .then(res => {
        if (res.status >= 200 && res.status < 400) {
          console.log(res.status);
          renderTable(elementID);
        }
      })
  });
  form.append(input);
  form.append(button);
  return form;
};