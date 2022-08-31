const submitBTN = document.getElementById('submit_btn');
const input = document.getElementById('user_name');
const resultSection = document.getElementById('result');

const renderUserData = (avatar_url, public_repos, followers, following, sectionForRender) => {
  const avatar = document.createElement('div');
  avatar.classList.add('imgWrapper');
  const img = document.createElement('img');
  img.classList.add('avatarImg');
  img.setAttribute('src', avatar_url);
  img.setAttribute('alt', 'avatar');
  avatar.append(img);
  const info = document.createElement('div');
  info.classList.add('info');
  const noRepositories = document.createElement('div');
  noRepositories.innerText = `Number of repositories ${public_repos}`;
  const noFollowers = document.createElement('div');
  noFollowers.innerText = `Number of followers ${followers}`;
  const noFollowing = document.createElement('div');
  noFollowing.innerText = `Number of following ${following}`;
  info.append(noRepositories);
  info.append(noFollowers);
  info.append(noFollowing);

  sectionForRender.append(avatar);
  sectionForRender.append(info);
};

const errorPage = async (data, resultSection) => {
  const error = document.createElement('div');
  error.classList.add('error');
  const errorCode = document.createElement('h1');
  errorCode.innerText = '404';
  error.append(errorCode);
  const errorText = document.createElement('p');
  errorText.innerText = data;
  error.append(errorText);
  resultSection.append(error);
};

const findUser = async (userName, sectionForRender) => {
  sectionForRender.innerHTML = '';
  const data = await fetch(`https://api.github.com/users/${userName}`);
  try {
    if (data.ok) {
      const { avatar_url, public_repos, followers, following } = await data.json();
      renderUserData(avatar_url, public_repos, followers, following, sectionForRender);
    } else {
      const response = await data.json();
      throw new Error(response.message);
    }
  } catch (e) {
    errorPage(e, resultSection);
  }
};

submitBTN.addEventListener('click', e => {
  e.preventDefault();
  findUser(input.value, resultSection);
});