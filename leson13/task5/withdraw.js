// import { push } from "core-js/core/array";

export const withdraw = (clients, balances, client, amount) => {
  const indexClient = clients.indexOf(client);
  if (balances[indexClient] > amount) {
    balances[indexClient] = balances[indexClient] - amount;
    balances.push(balances[indexClient]);
    const result = balances[indexClient];
    // console.log(balances);
    return result;
  }
  return -1;
};
withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
