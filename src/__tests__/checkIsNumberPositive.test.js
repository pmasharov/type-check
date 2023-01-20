const { checkIsNumberPositive } = require("../index");

describe("checkIsNumberPositive", () => {
	test("check if checkIsNumberPositive() defined", () => {
		expect(checkIsNumberPositive()).toBeDefined();
	});
	test("check if (1) is a positive number", () => {
		expect(checkIsNumberPositive(1)).toBeTruthy();
	});
	test("check if (100e23) is a positive number", () => {
		expect(checkIsNumberPositive(100e23)).toBeTruthy();
	});
	test("check if (Infinity) is a positive number", () => {
		expect(checkIsNumberPositive(Infinity)).toBeTruthy();
	});
	test("check if (-1) is a positive number", () => {
		expect(checkIsNumberPositive(-1)).toBeFalsy();
	});
	test("check if (0) is a positive number", () => {
		expect(checkIsNumberPositive(0)).toBeFalsy();
	});
	test("check if ('string') is a positive number", () => {
		expect(checkIsNumberPositive("string")).toBeFalsy();
	});
	test("check if (null) is a positive number", () => {
		expect(checkIsNumberPositive(null)).toBeFalsy();
	});
	test("check if (undefined) is a positive number", () => {
		expect(checkIsNumberPositive(undefined)).toBeFalsy();
	});
	test("check if (NaN) is a positive number", () => {
		expect(checkIsNumberPositive(NaN)).toBeFalsy();
	});
	test("check if (-Infinity) is a positive number", () => {
		expect(checkIsNumberPositive(-Infinity)).toBeFalsy();
	});
});
