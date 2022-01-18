const preschoolSum = require("./preschoolSum")

const testLog = (actual, expected, message) => {
	let result = "ERROR";
	if (actual === expected) result = "passed";
	console.log(actual, expected, message, "------------------", result);
}

testLog( preschoolSum(3, 4), 7, "Pozitv egészek");
testLog( preschoolSum(3, 14), "sok", "Tíznél nagyobb eredmény" );
testLog( preschoolSum(3, -4), 0, "Nullánál kisebb eredmény" );
testLog( preschoolSum(3.23, 4.4), 7, "Tizedesek" );