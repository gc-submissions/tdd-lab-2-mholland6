const formatCurrency = require("../src/js/money-functions");
const getCoins = require("../src/js/money-functions");

describe("formatCurrency function", () => {
  test("formatCurrency(0) toBe $0.00" , () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  test("Given the amount 1, it returns $1.00" , () => {
    expect(formatCurrency(1)).toBe("$1.00");
  });
  test("Given the amount 1.5 it returns $1.50" , () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  });
  test("Given the amount 0.01, it returns $0.01" , () => {
    expect(formatCurrency(.01)).toBe("$0.01");
  });
  test("Given the amount 527.6789, it returns $527.68" , () => {
    expect(formatCurrency(527.68)).toBe("$527.68");
  });
  test("Given the amount -1, it returns -$1.00" , () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });
  test("Given the amount -1.50, it returns -$1.50" , () => {
    expect(formatCurrency(-1.50)).toBe("-$1.50");
  });
  test("Given the amount -0.01, it returns -$0.01" , () => {
    expect(formatCurrency(-0.01)).toBe("-$0.01");
  });
});

// describe("getCoins", () => {
//   test.todo("add getCoins tests here");
// });