import { describe, expect, test } from "@jest/globals";
import delay from "./delay";

describe("Async functions", () => {
  test("Should return prmise", async () => {
    const result = await delay(() => 5 + 5, 1000);

    expect(result).toBe(10);
  });
});
