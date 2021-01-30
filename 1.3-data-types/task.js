'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (typeof (percent, contribution, amount) != "number") {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
  }

  let S = amount - contribution;
 
  let P = (percent * 1 / 12) / 100;

  let startDate = new Date();
  let finalDate = new Date(date);
  let n = (finalDate.getFullYear() * 12 + finalDate.getMonth()) - (startDate.getFullYear() * 12 + startDate.getMonth());
  
  let payment = S * (P + P / (Math.pow( 1 + P, n) - 1));
 
  let totalAmount = payment * n;

  console.log(totalAmount.toFixed(2));

  return totalAmount.toFixed(2);
}

function getGreeting(name) {
  if (name === '' || name == null) {
    console.log(`Привет, мир! Меня зовут Аноним.`);
      return `Привет, мир! Меня зовут Аноним.`;
  }

  let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
      return greeting;
}