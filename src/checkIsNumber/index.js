module.exports = {
	/**
	 *
	 * @param {*} value value to check if it is number
	 * @returns {boolean} returns true if checked value is number
	 */
	checkIsNumber: (value) => {
		return typeof value === "number" && !isNaN(value);
	},
};
