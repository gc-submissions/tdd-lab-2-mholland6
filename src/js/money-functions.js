// this section doesn't work yet


const formatCurrency = function(amount) {
  //const formattedString = "";
  if (amount < 0){
    amount = amount.toFixed(2);
    amount = "$" + amount; 
  } else {
    console.log(amount);
    amount = amount.toFixed()
    console.log(amount);
    amount = "$" + amount;
    console.log(amount);
  }
  return amount;
}
const test = formatCurrency(1);
console.log(test);
const test2 = formatCurrency(-1);
console.log(test2)

function getCoins(cents) {
  let total = cents;
  let numQuarters = 0;
  let numDimes = 0;
  let numNickels = 0;
  let numPennies = 0;
  let newObj = {quarters: numQuarters, 
                dimes: numDimes, 
                nickels: numNickels, 
                pennies: numPennies}  }
  while (total > 0 ) {
    if (total >= 25) {
        total -= 25;
        numQuarters++;
    } else if (total >= 10) {
        total -= 10;
        numDimes++;
    } else if (total >= 5) {
        total -= 5;
        numNickels++;
    } else {
        total -= 1;
        numPennies++;
    }
  return newObj;
  }
  



module.exports = {formatCurrency, getCoins};