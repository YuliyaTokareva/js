const createMessenger = () => {
	let message = `Just learn it!`;
	let sender = `Gromcode`;
	function sendMessage(name) {
		//   name =`Bob`;
		console.log(`${name}, ${message} Your ${sender}`);
	}
	function setMessage(text) {
		message = text;
		text = `Good job!`;
	}
	function setSender(senderName) {
		sender = senderName;
		// sender2 = `Gromcode`;
	}
	return {
		sendMessage,
		setMessage,
		setSender,
	};
};
export default createMessenger;
const messenger = createMessenger();

messenger.sendMessage("Bob");
messenger.setMessage("Good job!");
messenger.sendMessage("Bob");
messenger.setSender("Gromcode");
messenger.setMessage("Just learn it!");
messenger.sendMessage("Bob");

// let memory = 0;
// let sum;
// export function add(num) {
// 	sum = num + memory;
// 	memory = sum;
// 	console.log(memory);
// }
// export function decrease(num2) {
// 	sum = memory - num2;
// 	memory = sum;
// 	console.log(memory);
// }
// export function reset() {
// 	memory = 0;
// 	console.log(memory);
// 	return memory;
// }
// export function getMemo() {
// 	console.log(memory);
// 	return memory;
// }
// add(6);
// decrease(3);
// reset();
// getMemo();
