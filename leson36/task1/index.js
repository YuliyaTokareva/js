'use strict';

export const fetchUser = async suserId => {
  try {
    const responce = await fetch(`https://api.github.com/users/${suserId}`);
    if (!responce.ok) {
      return null;
    }
    const userData = await responce.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

fetchUser('facebookkrr')
  .then(userData => console.log(userData))
  .catch(err => console.log(err.message));
