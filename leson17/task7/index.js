export const user = {
	firstName: "John",
	lastName: "Doe",

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	setFullName(fullName) {
		let stringName = fullName.split(" ");
		this.firstName = stringName[0];
		this.lastName = stringName[1];
		console.log(fullName);
	},
};
const fullName = user.getFullName;
//let fullName = user.getFullName.apply(user);
//const stringFull = user.getFullName.apply(user);
//user.getFullName();
//let stringName = user.getFullName;

user.setFullName();
console.log(fullName);
//console.log(user.firstName);
//user.getFullName();
// user.reSetFullName();
