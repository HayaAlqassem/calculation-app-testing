// This file is dealing with parsing the users input. 

export function extractNumbers(formData) {
  /*
The extractNumbers function is using a feature that is built into the browser
that is the formData object. 
  */
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

export function extractEnteredNumberValues(form){
// We are using some DOM/browser APIs like FormData 
// We are getting the input provided by the user in the form 
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}


