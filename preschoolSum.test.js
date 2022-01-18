const preschoolSum = require("./preschoolSum.js");
const { expect } = require("@jest/globals");

test("Pozitv egészek", () => expect(preschoolSum(3, 4)).toBe(7));
test("Tíznél nagyobb eredmény.", () => expect(preschoolSum(3, 14)).toBe("sok"));
test("Nullánál kisebb eredmény.", () => expect(preschoolSum(3, -4)).toBe(0));
test("Tizedesek.", () => expect(preschoolSum(3.23, 4.4)).toBe(7));
