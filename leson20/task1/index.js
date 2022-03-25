export class User {
	constructor(name, age) {
		///свойство класса
		this.name = name;
		this.age = age;
	}
	static createEmpty() {
		return new User("", null);
	}

	sayHi() {
		console.log(`Hi, I am ${this.name}`);
	}
	requestNewPhoto() {
		console.log(`New photo request was sent for ${this.name}`);
	}

	setAge(age) {
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
	}
}
const user1 = new User(`Tom`, 17);
console.log(user1);
console.log(User.createEmpty());
//console.log(user1.setAge(25));
