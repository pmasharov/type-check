const { checkIsNumberNegative } = require("../index");

describe("checkIsNumberNegative", () => {
	test("check if checkIsNumberNegative() defined", () => {
		expect(checkIsNumberNegative()).toBeDefined();
	});
  test("check if (-1) is a negative number", () => {
    expect(checkIsNumberNegative(-1)).toBeTruthy();
  });
  test("check if (-Infinity) is a negative number", () => {
    expect(checkIsNumberNegative(-Infinity)).toBeTruthy();
  });
	test("check if (1) is a negative number", () => {
		expect(checkIsNumberNegative(1)).toBeFalsy();
	});
	test("check if (100e23) is a negative number", () => {
		expect(checkIsNumberNegative(100e23)).toBeFalsy();
	});
	test("check if (0) is a negative number", () => {
		expect(checkIsNumberNegative(0)).toBeFalsy();
	});
	test("check if ('string') is a negative number", () => {
		expect(checkIsNumberNegative("string")).toBeFalsy();
	});
	test("check if (null) is a negative number", () => {
		expect(checkIsNumberNegative(null)).toBeFalsy();
	});
	test("check if (undefined) is a negative number", () => {
		expect(checkIsNumberNegative(undefined)).toBeFalsy();
	});
	test("check if (NaN) is a negative number", () => {
		expect(checkIsNumberNegative(NaN)).toBeFalsy();
	});
  test("check if (Infinity) is a negative number", () => {
		expect(checkIsNumberNegative(Infinity)).toBeFalsy();
	});
});
