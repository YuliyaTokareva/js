const baseUrl = 'https://62ac36829fa81d00a7ac26c0.mockapi.io/api/v1/users';

const submitButtonElem = document.querySelector('.submit-button');
const formElem = document.querySelector('form');
const allInput = document.querySelectorAll('.form-input');

const validity = () => {
  return formElem.checkValidity();
};

const addNewUser = () => {
  const isValid = validity();
  if (isValid === false) {
    return;
  }
  submitButtonElem.disabled = false;
};
//console.log(addNewUser());
allInput.forEach(el => {
  el.addEventListener('input', addNewUser);
});

function savedUser() {
  const userEmail = document.querySelector('[type = "email"]').value;
  const userName = document.querySelector('[type="text"]').value;
  const userPassword = document.querySelector('[type="password"]').value;
  const newUserData = {
    email: `${userEmail}`,
    name: `${userName}`,
    password: `${userPassword}`,
  };
  console.log(newUserData);
  return newUserData;
}
function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

const sendUser = event => {
  event.preventDefault();
  const userData = savedUser();

  createUser(userData)
    .then(response => (response.ok === true ? response.json() : 'error'))
    .then(response => alert(JSON.stringify(response)));

  allInput.forEach(el => {
    el.value = '';
  });
};

submitButtonElem.addEventListener('click', sendUser);

//1. find all register string
//2.verify register string
//3. if data is ok send data to server
//4.show alert array whis user data
//5. ckear all string
