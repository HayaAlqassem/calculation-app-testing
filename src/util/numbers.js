import { validateStringNotEmpty, validateNumber } from './validation.js'

export function transformToNumber(value) {
  return +value;
}

// cleanNumbers function is responsible for giving us numbers of the type number.
// We are going to have integration tests because we are testing a function that calls other functions. 
export function cleanNumbers(numberValues) { 
  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}

