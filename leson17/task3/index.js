export function defer(func, ms) {
	return function () {
		setTimeout(() => func.apply(this, arguments), ms);
	};
}

const sayHi = {
	name: "Tom",
	showText() {
		console.log(`Hi, ${this.name}!`);
	},
};
