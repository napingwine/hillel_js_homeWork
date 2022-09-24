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