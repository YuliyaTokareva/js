let message = `Just learn it`;
export function sendMessage(name) {
  let sender = `Your Gromcode`;
  console.log(`${name}, ${message}! ${sender}`);
}
export function sentMessage(message1) {
  message = message1;
}
sendMessage("Ann");
sentMessage(`Good job`);
sendMessage("Ann");
