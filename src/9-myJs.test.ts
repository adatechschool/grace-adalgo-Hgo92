import {suite, test, expect} from "vitest";
import {myIncludes, myJoin, myObjectKeys, myIndexOf, myStartsWith, myRepeat, myObjectEntries} from "./9-myJs";

suite("myJs", () => {
    test("myIncludes", () => {
        expect(myIncludes(["a", "b", "c"], "b")).toBe(true);
        expect(myIncludes(["a", "b", "c"], "d")).toBe(false);
        expect(myIncludes([], "a")).toBe(false);
        expect(myIncludes(["hello"], "hello")).toBe(true);
        expect(myIncludes(["1", "2", "3"], "2")).toBe(true);
    });

    
    test("myIndexOf", () => {
        expect(myIndexOf(["a", "b", "c"], "b")).toBe(1);
        expect(myIndexOf(["a", "b", "c"], "c")).toBe(2);
        expect(myIndexOf(["a", "b", "c"], "d")).toBe(-1);
        expect(myIndexOf([], "a")).toBe(-1);
        })
    
    // TODO: test myStartsWith

    test("myStartsWith", () => {
        expect(myStartsWith("bonjour", "bon")).toBe(true);
        expect(myStartsWith("bonjour", "b")).toBe(true);
        expect(myStartsWith("bonjour", "au")).toBe(false);
        expect(myStartsWith("bonjour", "jour")).toBe(false);
        })
    
    // TODO: test myRepeat

    test("myRepeat", () => {
        expect(myRepeat("ha", 3)).toBe("hahaha");
        expect(myRepeat("x", 0)).toBe("");
        expect(myRepeat("bl", 10)).toBe("blblblblblblblblblbl");
    })


    test("myJoin", () => {
        expect(myJoin(["a", "b", "c"], "-")).toBe("a-b-c");
        expect(myJoin(["hello", "world"], " ")).toBe("hello world");
        expect(myJoin([], ",")).toBe("");
        expect(myJoin(["x"], ",")).toBe("x");
        expect(myJoin(["", ""], ",")).toBe(",");
    });

    test("myObjectKeys", () => {
        expect(myObjectKeys({a: 1, b: 2})).toEqual(["a", "b"]);
        expect(myObjectKeys({})).toEqual([]);
        expect(myObjectKeys({x: undefined, y: null})).toEqual(["x", "y"]);
    });

    // TODO: test myObjectEntries

    test("myObjectEntries", () => {
        expect(myObjectEntries({a: 1, b: 2})).toEqual([['a', 1],['b', 2]]);
        expect(myObjectEntries({})).toEqual([]);
        expect(myObjectEntries({x: undefined, y: null})).toEqual([["x", undefined],["y", null]]);
    });
});