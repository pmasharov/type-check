const {
	checkIsString,
	checkIsNumber,
	checkIsNumberPositive,
	checkIsNumberNegative,
	checkIsZero,
} = require("./src");

module.exports = {
	checkIsString,
	checkIsNumber,
	checkIsNumberPositive,
	checkIsNumberNegative,
	checkIsZero,
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
