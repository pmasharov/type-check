const { checkIsNumberFinite } = require("../index");

describe("checkIsNumberFinite", () => {
	test("check if checkIsNumberFinite() defined", () => {
		expect(checkIsNumberFinite()).toBeDefined();
	});
	test("check if (0) is finite number", () => {
		expect(checkIsNumberFinite(0)).toBeTruthy();
	});
	test("check if (1) is finite number", () => {
		expect(checkIsNumberFinite(1)).toBeTruthy();
	});
	test("check if (100e23) is finite number", () => {
		expect(checkIsNumberFinite(100e23)).toBeTruthy();
	});
	test("check if (17.97e307) is finite number", () => {
		expect(checkIsNumberFinite(17.97e307)).toBeTruthy();
	});
	test("check if (17.98e307) is finite number", () => {
		expect(checkIsNumberFinite(17.98e307)).toBeFalsy();
	});
	test("check if (Infinity) is finite number", () => {
		expect(checkIsNumberFinite(Infinity)).toBeFalsy();
	});
	test("check if (-Infinity) is finite number", () => {
		expect(checkIsNumberFinite(-Infinity)).toBeFalsy();
	});
	test("check if ('string') is finite number", () => {
		expect(checkIsNumberFinite("string")).toBeFalsy();
	});
	test("check if (null) is finite number", () => {
		expect(checkIsNumberFinite(null)).toBeFalsy();
	});
	test("check if (undefined) is finite number", () => {
		expect(checkIsNumberFinite(undefined)).toBeFalsy();
	});
	test("check if (NaN) is finite number", () => {
		expect(checkIsNumberFinite(NaN)).toBeFalsy();
	});
	test("check if checkIsNumberFinite() is finite number", () => {
		expect(checkIsNumberFinite()).toBeFalsy();
	});
});
