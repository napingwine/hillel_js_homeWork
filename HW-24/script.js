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

const findUser = async (userName, sectionForRender) => {
  sectionForRender.innerHTML = '';
  try {
    const data = await fetch(`https://api.github.com/users/${userName}`);
    throw new Error('error')
    const userData = await data.json(); 
    const { avatar_url, public_repos, followers, following } = userData;
    await renderUserData(avatar_url, public_repos, followers, following, sectionForRender);
  } catch (e) {
    console.log(e);
  }
};

submitBTN.addEventListener('click', e => {
  e.preventDefault();
  findUser(input.value, resultSection);
});