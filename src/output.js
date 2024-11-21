export function generateTextResult(calculationResult) {
  let textResult = '';

  if (calculationResult === 'invalid') {
    textResult = 'Invalid input. You must enter valid numbers.';
  } else if (calculationResult !== 'no-calc') {
    textResult = 'Result: ' + calculationResult;
  }

  return textResult;
}

export function outputResult(textResult) {
    const output = document.getElementById('result'); 
    output.textContent = textResult; 
}




