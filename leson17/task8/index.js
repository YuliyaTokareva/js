// export const user = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };
// console.log(user.getFullName.call(user));
//const string = user.getFullName.call(...arguments);

//const setFullName = {
//stringFullName: user.getFullName.call(user).split(" "),
// ().split(" "),
// arr: stringFullNmae.split(" "),
// getNewObj() {
// 	const name = `${this.stringFullName.call(user)}`;
// },
//};

// console.log(setFullName.stringFullName);
// console.log(setFullName.name);
//setFullName.getNewObj();

// const user = {
// 	firstName: "John",
// 	lastName: "Doe",
// };
// function getFullName(text) {
// 	return `${this.firstName} ${this.lastName}. ${text}`;
// }
// export function bind(func, context) {
// 	console.log(func.call(user, context));
// }
// //console.log(user.getFullName.call(user, "How are You?"));
// bind(getFullName, "How are You?");

export let user = {
	firstName: "John",
	lastName: "Doe",
	getFullName() {
		console.log(`${this.firstName} ${this.lastName}`);
		return `${this.firstName} ${this.lastName}`;
	},
	setFullName() {
		let stringFullName = this.getFullName();
		//[...this.getFullName.call(this).split(" ")];
		stringFullName = getFullName();

		this.getFullName();
		//console.log(this.stringFullName);
	},
};
//console.log(user.firstName);
//console.log(user.getFullName());
user.setFullName();
user.getFullName();
//console.log(user.firstName);
//user.getFullName();
