module.exports = {
	/**
	 *
	 * @param {*} value value to check if it is string
	 * @returns {boolean} returns true if checked value is string
	 */
	checkIsString: (value) => {
		return typeof value === "string";
	},

	/**
	 *
	 * @param {*} value value to check if it is number
	 * @returns {boolean} returns true if checked value is number
	 */
	checkIsNumber: (value) => {
		return typeof value === "number" && !isNaN(value);
	},
	/**
	 *
	 * @param {number} value value to check if it is positive number
	 * @returns {boolean} returns true if checked value is positive number
	 */
	checkIsNumberPositive: (value) => {
		return typeof value === "number" && !isNaN(value) && value > 0;
	},
	/**
	 *
	 * @param {number} value value to check if it is negative number
	 * @returns {boolean} returns true if checked value is negative number
	 */
	checkIsNumberNegative: (value) => {
		return typeof value === "number" && !isNaN(value) && value < 0;
	},
	/**
	 *
	 * @param {number} value value to check if it is zero
	 * @returns {boolean} returns true if checked value is zero
	 */
	checkIsZero: (value) => {
		return value === 0;
	},
	/**
	 *
	 * @param {*} value value to check if it is finite number
	 * @returns {boolean} returns true if checked value is finite number
	 */
	checkIsFinite: (value) => {
		return Number.isFinite(value);
	},

	/**
	 *
	 * @param {*} value value to check if it is array
	 * @returns {boolean} returns true if checked value is array
	 */
	checkIsArray: (value) => {
		return value instanceof Object && value.constructor === Array;
	},
	/**
	 *
	 * @param {*} value value to check if it is object
	 * @returns {boolean} returns true if checked value is object
	 */
	checkIsObject: (value) => {
		return value instanceof Object && value.constructor === Object;
	},
	/**
	 *
	 * @param {*} value value to check if it is null
	 * @returns {boolean} returns true if checked value is null
	 */
	checkIsNull: (value) => {
		return value === null;
	},
	/**
	 *
	 * @param {*} value value to check if it is undefined
	 * @returns {boolean} returns true if checked value is undefined
	 */
	checkIsUndefined: (value) => {
		return value === undefined;
	},
	/**
	 *
	 * @param {*} value value to check if it is function
	 * @returns {boolean} returns true if checked value is function
	 */
	checkIsFunction: (value) => {
		return value instanceof Function && value.constructor === Function;
	},
};
