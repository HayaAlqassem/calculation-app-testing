import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateTextResult, outputResult } from './src/output.js';

// querySelector and getElementById are browser APIs/built-in browser features.
const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  
  const result = calculateResult(numberValues);
  const textResult = generateTextResult(result);

  outputResult(textResult);
}

form.addEventListener('submit', formSubmitHandler); // We are interacting with the DOM. 
