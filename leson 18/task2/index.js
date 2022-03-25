export const wallet = {
	transactions: [1, 2, 3],
	GetMax() {
		let max = Math.max(...this.transactions);
		return max;
	},
	GetMin() {
		let min = Math.min(...this.transactions);
		return min;
	},
};

console.log(wallet.GetMax());
console.log(wallet.GetMin());
