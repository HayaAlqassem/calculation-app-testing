import { cleanNumbers } from './util/numbers.js';

export function add(numbers) {
  // (numbers) are an array of numbers
  let sum = 0;

  // throw new Error ('something went wrong');

  for (const number of numbers) {
    // Adding a plus in "+number" to force a conversion to a real number.
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberValues){
  // Validating input: 
  let result = '';
  try {
    const numbers = cleanNumbers(numberValues);
    
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}