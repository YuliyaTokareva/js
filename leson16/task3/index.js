// export function createArrayOfFunctions(num) {
// 	var arr = [];
// 	if (typeof num === "undefined") {
// 		return arr;
// 	}
// 	if (typeof num !== "number") {
// 		return null;
// 	}

// 	for (let i = 0; i < num; i++) {
// 		arr[i] = function () {
// 			return i;
// 		};
// 	}

// 	return arr;
// }

//createArrayOfFunctions(`f`);
//console.log(createArrayOfFunctions(9));
var foo = 1;

function bar() {
	if (!foo) {
		console.log(foo);
		let foo = 10;
		console.log(foo);
	}
	console.log(foo);
	return foo;
}

var foo = bar();
console.log(bar());
console.log(foo);
