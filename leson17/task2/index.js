export const callbackPrompt = {
	message: "Tell me number",

	showPrompt() {
		const phoneNumber = prompt(this.message);
		console.log(phoneNumber);
	},
	showDeferredPromt(ms) {
		setTimeout(this.showPrompt.bind(this), ms);
	},
};
callbackPrompt.showDeferredPromt(2000);
// console.log(`${this.message} ${this.lastName}`);
// return `${this.firstName} ${this.lastName}`;
