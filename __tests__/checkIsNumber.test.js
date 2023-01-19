const { checkIsNumber } = require("../index");

test("check if result of checking if () is a number is defined", () => {
	expect(checkIsNumber()).toBeDefined();
});
test("check if (1) is a number", () => {
	expect(checkIsNumber(1)).toBeTruthy();
});
test("check if (100e23) is a number", () => {
  expect(checkIsNumber(100e23)).toBeTruthy();
});
test("check if ('string') is a number", () => {
	expect(checkIsNumber('string')).toBeFalsy();
});
test("check if (null) is a number", () => {
	expect(checkIsNumber(null)).toBeFalsy();
});
test("check if (undefined) is a number", () => {
	expect(checkIsNumber(undefined)).toBeFalsy();
});
test("check if (NaN) is a number", () => {
	expect(checkIsNumber(NaN)).toBeFalsy();
});
