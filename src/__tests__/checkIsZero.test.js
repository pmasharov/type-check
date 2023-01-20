const { checkIsZero } = require("../index");

describe("checkIsZero", () => {
	test("check if checkIsZero() defined", () => {
		expect(checkIsZero()).toBeDefined();
	});
	test("check if (0) is the zero", () => {
		expect(checkIsZero(0)).toBeTruthy();
	});
	test("check if (1) is the zero", () => {
		expect(checkIsZero(1)).toBeFalsy();
	});
	test("check if (100e23) is the zero", () => {
		expect(checkIsZero(100e23)).toBeFalsy();
	});
	test("check if (Infinity) is the zero", () => {
		expect(checkIsZero(Infinity)).toBeFalsy();
	});
	test("check if (-Infinity) is the zero", () => {
		expect(checkIsZero(-Infinity)).toBeFalsy();
	});
	test("check if ('string') is the zero", () => {
		expect(checkIsZero("string")).toBeFalsy();
	});
	test("check if (null) is the zero", () => {
		expect(checkIsZero(null)).toBeFalsy();
	});
	test("check if (undefined) is the zero", () => {
		expect(checkIsZero(undefined)).toBeFalsy();
	});
	test("check if (NaN) is the zero", () => {
		expect(checkIsZero(NaN)).toBeFalsy();
	});
});
