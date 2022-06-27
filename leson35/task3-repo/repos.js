const listElem = document.querySelector('.repo-list');

export const renderRepos = reposList => {
  const reposListElems = reposList.map(name => {
    console.log(reposList);
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;

    return listElem;
  });
  listElem.append(...reposListElems);
};
