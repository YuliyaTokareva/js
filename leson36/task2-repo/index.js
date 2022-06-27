import { fetchUserData, fetchRepositories } from './geteways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanRepoList } from './repos.js';
import { showSpinner, hideSpinner } from './spiner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  cleanRepoList();
  showSpinner();
  const userName = userInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
    userInputElem.value = '';
  }

  // fetchUserData(userName)
  //   .then(userData => {
  //     renderUserData(userData);
  //     return userData.repos_url;
  //   })
  //   .then(url => {
  //     fetchRepositories(url);
  //     return fetchRepositories(url);
  //   })
  //   .then(reposList => {
  //     renderRepos(reposList);
  //     //console.log(renderRepos(reposList));
  //     hideSpinner();
  //     userInputElem.value = '';
  //   })
  //   .catch(err => {
  //     hideSpinner();
  //     userInputElem.value = '';
  //     alert(err.message);
  //   });
};

showUserBtnElem.addEventListener('click', onSearchUser);
