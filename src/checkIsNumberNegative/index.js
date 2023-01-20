module.exports = {
	/**
	 *
	 * @param {number} value value to check if it is negative number
	 * @returns {boolean} returns true if checked value is negative number
	 */
	checkIsNumberNegative: (value) => {
		return typeof value === "number" && !isNaN(value) && value < 0;
	},
};
