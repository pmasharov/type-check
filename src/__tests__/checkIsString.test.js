const { checkIsString } = require("../index");

describe("checkIsString", () => {
	test("check if checkIsString() defined", () => {
		expect(checkIsString()).toBeDefined();
	});
	test("check if ('string value') is a string", () => {
		expect(checkIsString("string value")).toBeTruthy();
	});
	test("check if ('') is a string", () => {
		expect(checkIsString("")).toBeTruthy();
	});
	test("check if (100e23) is a string", () => {
		expect(checkIsString(100e23)).toBeFalsy();
	});
	test("check if (null) is a string", () => {
		expect(checkIsString(null)).toBeFalsy();
	});
	test("check if (undefined) is a string", () => {
		expect(checkIsString(undefined)).toBeFalsy();
	});
	test("check if (NaN) is a string", () => {
		expect(checkIsString(NaN)).toBeFalsy();
	});
	test("check if (Infinity) is a string", () => {
		expect(checkIsString(Infinity)).toBeFalsy();
	});
});
