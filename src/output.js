/* 
generateTextResult should return a text that is ['Result: ' + calculationResult] if it receives a number.
calculationResult is the number as a text. 
*/
export function generateTextResult(calculationResult) {
  let textResult = '';

  // 'invalid' and 'no-calc' are error codes, if calculationResult does not hold a number output. 
  if (calculationResult === 'invalid') {
    textResult = 'Invalid input. You must enter valid numbers.';
  } else if (calculationResult !== 'no-calc') {
    textResult = 'Result: ' + calculationResult;
  }

  return textResult;
}

export function outputResult(textResult) {
    const output = document.getElementById('result'); 
    output.textContent = textResult; // Access the DOM to output this textResult. 
}




