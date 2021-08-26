// this section doesn't work yet


function formatCurrency(amount) {
  if (amount === 0){
    amount = "$0.00";
  } else if (amount < 0){
    amount = amount * -1;
    amount = amount.toFixed(2);
    amount = "-$" + amount; 
  } else {
    amount = amount.toFixed(2);
    amount = "$" + amount;
  }
  return amount;
}


function getCoins(cents) {
  let total = cents;
  let numQuarters = 0;
  let numDimes = 0;
  let numNickels = 0;
  let numPennies = 0;   
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
    let newObj = {quarters: numQuarters, 
      dimes: numDimes, 
      nickels: numNickels, 
      pennies: numPennies}  
  }
  return newObj;
}



module.exports = formatCurrency;
