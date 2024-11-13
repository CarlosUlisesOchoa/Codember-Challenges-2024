const { solveLock } = require("../src/challenge-01.js");

describe("Challenge 01 - Terminal Lock", () => {
  test('should solve combination "000" with movements "URURD"', () => {
    expect(solveLock("000", "URURD")).toBe("119");
  });

  test('should solve combination "1111" with movements "URUUUU"', () => {
    expect(solveLock("1111", "URUUUU")).toBe("4411");
  });

  test('should solve combination "9999" with movements "LULULULD"', () => {
    expect(solveLock("9999", "LULULULD")).toBe("8000");
  });
});
