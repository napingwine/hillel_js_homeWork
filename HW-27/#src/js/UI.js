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