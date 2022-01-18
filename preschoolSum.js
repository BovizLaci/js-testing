const preschoolSum = (num1, num2) => {
	let result;
	if (num1 && num2) {
		const sum = num1 + num2;
		if (sum > 10) result = "sok"
		else {
			if (sum < 0) result = 0
			else {
				result = Math.floor(sum);
			}
		}
	}
	return result;
}

module.exports = preschoolSum;
