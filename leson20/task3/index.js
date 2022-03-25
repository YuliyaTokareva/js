export class Wallet {
	_balance = 0;

	getBalance() {
		return this._balance;
	}
	deposit(amount) {
		this._balance += amount;
	}
	withdraw(amount) {
		if (amount > this._balance) {
			console.log("No enough funds");
			return;
		}
		this._balance -= amount;
	}
}
const wallet1 = new Wallet();
console.log(wallet1.getBalance());
wallet1.deposit(46);
console.log(wallet1.getBalance());
wallet1.withdraw(46);
console.log(wallet1.getBalance());
wallet1.withdraw(146);
console.log(wallet1.getBalance());
