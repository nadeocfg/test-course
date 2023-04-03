import validateValue from "./validateValue";

describe("Validate value helper", () => {
  test("Should return true for value 50", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Should return true for value 100", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Should return true for value 0", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Should return false for value -1", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Should return false for value 101", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("Should return false for not numeric value", () => {
    expect(validateValue("Wrong type")).toBe(false);
  });
  test("Should return false for undefined value", () => {
    expect(validateValue(undefined)).toBe(false);
  });
});
