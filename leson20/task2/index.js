export { Vehicle, Ship };
class Vehicle {
	constructor(name, numberOfWeels) {
		this.name = name;
		this.numberOfWeels = numberOfWeels;
	}
	move() {
		console.log(`${this.name} is moving`);
	}
	stop() {
		console.log(`${this.name} stopped`);
	}
}
class Ship extends Vehicle {
	constructor(name, maxSpeed) {
		super(name, false);
		this.maxSpeed = maxSpeed;
	}
	move() {
		console.log(`${this.name} lifting anchor up`);
		super.move();
	}
	stop() {
		super.stop();
		console.log(`${this.name} lifting anchor down`);
	}
}
const ship1 = new Ship("Aurora", 17);
console.log(ship1);
