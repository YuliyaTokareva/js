'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */
const baseLink = 'https://api.github.com/users/';

const getUsersBlogs = async users => {
  const allLink = users.map(user => {
    return baseLink + user;
  }, baseLink);

  const response = Promise.all(allLink).then(resolve => {
    resolve.map(li => {
      const ress = fetch(li)
        .then(response => response.json())
        .then(result => {
          console.log(result.blog);
          return result.blog;
        });
      //const blogData = ress.json();
      console.log(ress);
      return ress;
    });
  });
  console.log(response);
  //  response .then (links => {
  //     const response = links.map(linkk =>{
  //     await fetch(linkk);
  //     console.log(response);
  //     const blogData = await response.json();
  //     console.log(blogData);
  //     return blogData.blog;
  //     })
  // try {
  //   const response = await fetch('https://api.github.com/users/microsoft');
  //   const blogData = await response.json();
  //   console.log(blogData.blog);
  //   return blogData.blog;
  // } catch (err) {
  //   throw new Error('failed');
  // }
};
//getUsersBlogs().then(linksList => console.log(linksList));
// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
