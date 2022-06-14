export const delay = time => {
  const request = new Promise(resolve => {
    setTimeout(() => {
      // console.log('Done');
      resolve('Done');
    }, time);
  });
  return request;
};
delay(3000).then(value => console.log(value));
