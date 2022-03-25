export { vehicle, ship };
const vehicle = {
	moving() {
		console.log(`${this.name} is moving`);
	},
	stop() {
		console.log(`${this.name} stopped`);
	},
};
const ship = {
	name: `Argo`,
	startMachine() {
		console.log(`${this.name} lifting anchor up`);
		this.moving();
	},
	stopMachine() {
		this.stop();
		console.log(`${this.name} lifting anchor down`);
	},
};
Object.setPrototypeOf(ship, vehicle);
ship.startMachine();
ship.stoptMachine();
