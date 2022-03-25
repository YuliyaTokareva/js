export function saveCalls(func) {
	const calls = [];

	function withMemory(...args) {
		calls.push(args);
		console.log(withMemory.calls);
		return func.apply(this, args);
	}
	withMemory.calls = calls;

	return withMemory;
}
function test(a, b) {
	return a * a + b * b;
}
test(2, 3);
saveCalls(test);
console.log(withMemory.calls);
//saveCalls(test(3));
