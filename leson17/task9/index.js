// let time;
// let timeGet;
// export const timer = {
// 	secondsPassed: 0,
// 	minsPassed: 0,

// 	startTimer() {
// 		time = setInterval(startTimerCout, [1000]);
// 		//return time;
// 	},

// 	getTime() {
// 		if (this.secondsPassed <= 9) {
// 			console.log(`${this.minsPassed}:0${this.secondsPassed}`);
// 			return `${this.minsPassed}:0${this.secondsPassed}`;
// 		}
// 		if (this.secondsPassed > 9) {
// 			console.log(`${this.minsPassed}:${this.secondsPassed}`);
// 			return `${this.minsPassed}:${this.secondsPassed}`;
// 		}
// 	},
// 	resetTimer() {
// 		this.minsPassed = 0;
// 		this.secondsPassed = 0;
// 		timer.getTime();
// 	},
// 	stopTimer() {
// 		clearInterval(time);

// 		//console.log(timeGet);
// 		timer.getTime();
// 	},
// 	//console.log(this.secondsPassed);
// };

// function startTimerCout() {
// 	timer.secondsPassed++;
// 	if (timer.secondsPassed > 59) {
// 		timer.minsPassed = timer.minsPassed + 1;
// 		timer.secondsPassed = 0;
// 	}
// 	//timeGet = `${timer.minsPassed}: ${timer.secondsPassed}`;
// 	timer.getTime();
// }

// timer.startTimer();
//setTimeout(timer.stopTimer, 5000);
//setTimeout(timer.startTimer, 5000);
//timer.startTimer();
//setTimeout(timer.resetTimer, 10000);
//setTimeout(timer.startTimer, 5000);
//timer.stopTimer();
//setTimeout(timer.stopTimer, 3000);
//timer.stopTimer();
//setTimeout(timer.getTime, 11000);
export let user = {
	firstName: "John",
	lastName: "Doe",
	getFullName() {
		let updateFullName = `${this.firstName} ${this.lastName}`;
		this.get = updateFullName;
		console.log(updateFullName);
		return updateFullName;
	},
	setFullName() {
		let stringFullName = this.get;
		this.firstName = stringFullName.split(" ")[0];
		this.lastName = stringFullName.split(" ")[1];
		this.getFullName();
	},
};
console.log(user.getFullName());
console.log(user.get);
//console.log(user.firstName);
//user.setFullName();
//console.log(user.firstName);
//user.getFullName();
