const API_URL = "https://6311e835f5cba498da8807bf.mockapi.io/hw25/students/";
const headerColumns = ['Name', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'DEL'];

const renderTable = elementID => {
  console.log(123);
  const usersTable = document.getElementById(elementID);
  usersTable.innerHTML = '';
  usersTable.append(createTableHeader(headerColumns));
  getUsers().then(users => {
    users.map(el => usersTable.append(userRowRender(el, deleteUser, updateUser, renderTable, elementID)));
  });
};

renderTable('users-list');
document.body.append(addUserForm(addUser, renderTable, 'users-list'));