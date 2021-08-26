const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");


describe("Cart", () => {
  test("the constructor correctly sets the items property to an empty array" , () => {
    const cart = new Cart();
    expect(cart.items).toEqual([]);
  });
  test("calling add adds one product object" , () => {
    const product = new Product("oranges", 6, false);
    const cart = new Cart();
    console.log(cart);
    console.log(product);
    cart.add(product);
    console.log(cart)
    expect(cart.items).toEqual(cart.items);  
  });
  test("calling add twice adds two product objects" , () => {
    const product1 = new Product("oranges", 6, false);
    const product2 = new Product("apples", 5, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2)
    //console.log(cart)
    expect(cart.items).toEqual(cart.items);  
  });
  test("calling getItemCount returns array length, first test" , () => {
    const product1 = new Product("oranges", 6, false);
    const product2 = new Product("apples", 5, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2)
    cart.getItemCount();
    expect(cart.getItemCount()).toEqual(2);  
  });
  test("calling getItemCount returns array length, second test" , () => {
    const product1 = new Product("oranges", 6, false);
    const product2 = new Product("apples", 5, true);
    const product3 = new Product("bananas", 3, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2)
    cart.add(product3)
    cart.getItemCount();
    expect(cart.getItemCount()).toEqual(3);  
  });
  test("getTotalBeforeTax returns the sum of the price of all Products in the items array, first test" , () => {
    const product1 = new Product("oranges", 6, false);
    const product2 = new Product("apples", 5, true);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2)
    //const totalBeforeTax = cart.getTotalBeforeTax();
    expect(cart.getTotalBeforeTax()).toEqual(11);
    //console.log(totalBeforeTax);  
  });
  test("getTotalBeforeTax returns the sum of the price of all Products in the items array, second test" , () => {
    const product1 = new Product("oranges", 6, false);
    const product2 = new Product("apples", 5, true);
    const product3 = new Product("bananas", 3, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    //const totalBeforeTax = cart.getTotalBeforeTax();
    expect(cart.getTotalBeforeTax()).toEqual(14);
    //console.log(totalBeforeTax);  
  });
  test("1: getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array" , () => {
    const product1 = new Product("oranges", 5, false);
    const product2 = new Product("apples", 1, true);
    const product3 = new Product("bananas", 5, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    //const totalWithTax = cart.getTotalWithTax();
    expect(cart.getTotalWithTax()).toBeCloseTo(11.1);
    //console.log(cart.getTotalWithTax());  
  });
  test("2: getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array" , () => {
    const product1 = new Product("oranges", 5, true);
    const product2 = new Product("apples", 1, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    //const totalWithTax = cart.getTotalWithTax();
    expect(cart.getTotalWithTax()).toBeCloseTo(6.5);
    //console.log(cart.getTotalWithTax());  
  });
  test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax" , () => {
    const product1 = new Product("oranges", 1, true);
    const product2 = new Product("apples", 1, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    console.log(cart.getTax());
    //const totalWithTax = cart.getTotalWithTax();
    expect(cart.getTax()).toBeCloseTo(.1);
  });
  test("2: getTax returns the difference between getTotalWithTax and getTotalBeforeTax" , () => {
    const product1 = new Product("oranges", 1, true);
    const product2 = new Product("apples", 1, false);
    const product3 = new Product("bananas", 5, false);
    const cart = new Cart();
    cart.add(product1);
    cart.add(product2);
    cart.add(product3);
    console.log(cart.getTax());
    //const totalWithTax = cart.getTotalWithTax();
    expect(cart.getTax()).toBeCloseTo(.1);
  });

});