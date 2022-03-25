"use strict";

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
	id = String(
		+new Date() +
			"" +
			(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000)
	);
	dateCreated = new Date();
	dateConfirmed;
	isConfirmed = Boolean(false);
	constructor(price, city, type) {
		this.price = Number(price);
		this.city = String(city);
		this.type = String(type);
	}

	checkPrice() {
		if (this.price > 1000) {
			return true;
		}
		return false;
	}
	confirmOrder() {
		if (this.isConfirmed === false) {
			this.isConfirmed = true;
			this.dateConfirmed = new Date();
			//return this.confirmed, this.dateConfirmed;
		}
		return;
	}
	isValidType() {
		if (this.type.includes("Buy") || this.type.includes("Sell")) {
			console.log(true);
			return true;
		}
		console.log(false);
		return false;
		// console.log(this.type.includes("Buy", "Sell"));
		// return this.type.includes("Buy", "Sell");
	}
}

const order1 = new Order(123, `UK`, "jhg");
const order2 = new Order(123, `UK`, "Buy");
//order1(123, `UK`, `Buy`);
console.log(order1);
console.log(order2);
// wallet1.deposit(46);
order1.confirmOrder();
console.log(order1);
order1.confirmOrder;
console.log(order1);
order1.isValidType;
order2.isValidType;

console.log(order1.isValidType());
console.log(order2.isValidType());
// wallet1.withdraw(46);
// console.log(wallet1.getBalance());
// wallet1.withdraw(146);
// console.log(wallet1.getBalance());
