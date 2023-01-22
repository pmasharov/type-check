module.exports = {
	/**
	 *
	 * @param {*} value value to check if it is finite number
	 * @returns {boolean} returns true if checked value is finite number
	 */
	checkIsNumberFinite: (value) => {
		return Number.isFinite(value);
	},
};
