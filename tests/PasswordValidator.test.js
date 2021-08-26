const PasswordValidator = require("../src/js/PasswordValidator");

describe("PasswordValidator", () => {
  test("password is too short" , () => {
    const password = new PasswordValidator("")
    expect(cart.items).toEqual([]);
  });