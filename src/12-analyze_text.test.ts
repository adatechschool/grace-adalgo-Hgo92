import { describe, test, expect } from "vitest";
import { analyze_text } from "./12-analyze_text";

describe("analyse_text", () => {
  test("Two words, one sentence", () => {
    expect(analyze_text("Hello world.")).toEqual({ letters: 10, words: 2, sentences: 1 });
  });

    test("Five words, two sentences", () => {
    expect(analyze_text("Hello world. How are you?")).toEqual({ letters: 19, words: 5, sentences: 2 });
  });

      test("No word", () => {
    expect(analyze_text("")).toEqual({ letters: 0, words: 0, sentences: 0 });
  });

})