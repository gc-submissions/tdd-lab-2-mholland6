const Product = require("../src/js/Product");

describe("Product", () => {
  //test.todo("add Product tests here");
  test("constructor sets three properties on the class" , () => {
    const product = new Product("apples", 5, true);
    expect(product.name).toBe("apples");
    expect(product.price).toBe(5);
    expect(product.taxable).toBe(true);
  });
  test("constructor sets three properties on the class, second attempt" , () => {
    const product = new Product("oranges", 6, false);
    expect(product.name).toBe("oranges");
    expect(product.price).toBe(6);
    expect(product.taxable).toBe(false);
  });
  test("product with taxable===true, return price + 10%" , () => {
    const product = new Product("banana", 1, true);
    const priceWithTax = product.getPriceWithTax();
    expect(priceWithTax).toBeCloseTo(1.1);
  });
  test("product with taxable===true, return price + 10%, second attempt" , () => {
    const product = new Product("peach", 1.5, true);
    const priceWithTax = product.getPriceWithTax();
    expect(priceWithTax).toBeCloseTo(1.65);
  });
  test("product with taxable===false, return price without tax, first attempt" , () => {
    const product = new Product("kiwi", .50, false);
    const priceWithTax = product.getPriceWithTax();
    expect(priceWithTax).toBe(.50);
  });
  test("product with taxable===false, return price without tax, second attempt" , () => {
    const product = new Product("grapes", 2.99, false);
    const priceWithTax = product.getPriceWithTax();
    expect(priceWithTax).toBe(2.99);
  });
});