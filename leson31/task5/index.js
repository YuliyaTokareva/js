const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse.json());
  return serverResponse.json();
});
/*
 * допиши первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  .then(response => {
    /* ...code here */
    console.log(response);
    return response;
  })
  .then(result => {
    console.log(result); // { name: 'John', age: 20 }
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!'
);
