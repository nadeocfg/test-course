import { describe, expect, jest, test } from "@jest/globals";
import getSquare from "./getSquare";

describe("Get square of value", () => {
  beforeEach(() => {});

  beforeAll(() => {});

  test("Should return 4", () => {
    expect(getSquare(2)).toEqual(4);
  });

  test("Should return 0", () => {
    // @ts-ignore
    expect(getSquare("Wrong type")).toEqual(0);
  });

  test("Should return 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    getSquare(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Should return 0", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    getSquare(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {});
});
