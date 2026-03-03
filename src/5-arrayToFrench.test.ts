import { describe, test, expect } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

describe("arrayToFrench", () => {
  test("one word", () => {
    expect(arrayToFrench(["test"])).toBe("test");
  });

    test("two words", () => {
    expect(arrayToFrench(["test", "test2"])).toBe("test et test2");
  });

    test("multiple words", () => {
    expect(arrayToFrench(["test","test2","test3","test4","test5"])).toBe("test, test2, test3, test4 et test5");
  });

});