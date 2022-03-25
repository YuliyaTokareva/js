export function User(name, age) {
	this.name = name;
	this.age = age;
}
User.prototype.sayHi = function () {
	console.log(`Hi, I am ${this.name}`);
};
User.prototype.setAge = function (age) {
	if (age < 0) {
		console.log(`false`);
		return false;
	}
	this.age = age;

	if (age >= 25) {
		this.age = age;
		console.log(`New photo request was sent for ${this.name}`);
		this.requestNewPhoto();
	}

	return age;
};
User.prototype.requestNewPhoto = function () {
	console.log(`New photo request was sent for ${this.name}`);
};

const user1 = new User(`Tom`, -1);
console.log(user1);

user1.setAge();
