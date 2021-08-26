const Product = require("./Product");

class Cart {
  constructor() {
    this.items = [];
  }
  add(product) {
    this.items.push(product);
  }
  getItemCount() {
    return this.items.length;
  }
  getTotalBeforeTax(){
    let sumBeforeTax = 0;
    for (const item of this.items) {
      sumBeforeTax += item.price;
    }
    return sumBeforeTax;
  }
  getTotalWithTax() {
    let sumWithTax = 0;
    for (const item of this.items) {
      sumWithTax += item.getPriceWithTax();
    }
    return sumWithTax;
  }
  getTax() {
    return this.getTotalWithTax() - this.getTotalBeforeTax();
  }

}


module.exports = Cart;