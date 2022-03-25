export const createCalculator = () => {
	let memo = 0;
	console.log(memo);
	function add(num) {
		memo = memo + num;
		console.log(memo);
	}
	function decrease(num2) {
		memo = memo - num2;
		console.log(memo);
	}
	function reset() {
		memo = 0;
	}
	function getMemo() {
		console.log(memo);
		return memo;
	}

	return {
		add,
		decrease,
		reset,
		getMemo,
	};
};
const solution1 = createCalculator();
const solution2 = createCalculator();

solution1.add(2);
solution2.decrease(3);
solution1.reset();
solution1.getMemo();
solution2.getMemo();
// solution2.decrease(3);
// console.log(memo);
