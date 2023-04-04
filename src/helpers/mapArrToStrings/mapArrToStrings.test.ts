import mapArrToStrings from "./mapArrToStrings";

describe("Convert array items into string", () => {
  test("Should return array of strings", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Should return array of strings", () => {
    // @ts-ignore
    expect(mapArrToStrings([1, "asd", 3])).toEqual(["1", "3"]);
  });
  test("Should return array of strings", () => {
    expect(mapArrToStrings(undefined)).toEqual([]);
  });
});
