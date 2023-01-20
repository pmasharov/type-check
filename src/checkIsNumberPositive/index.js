module.exports = {
	/**
	 *
	 * @param {number} value value to check if it is positive number
	 * @returns {boolean} returns true if checked value is positive number
	 */
	checkIsNumberPositive: (value) => {
		return typeof value === "number" && !isNaN(value) && value > 0;
	},
};
