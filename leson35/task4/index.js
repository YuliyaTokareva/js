export function parseUser(stringJson) {
  try {
    const userData = JSON.parse(stringJson);

    return userData;
  } catch (err) {
    if (err instanceof SyntaxError) {
      return null;
    }
  }
}

//const showPatse = parseUser('https://62ac36829fa81d00a7ac26c0.mockapi.io/api/v1/users');
parseUser('{"name":"Igor"');
console.log(parseUser('{"name":"Igor"}'));
