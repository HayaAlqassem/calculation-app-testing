import { it, expect, describe } from 'vitest'; // You can import "test" or "it", they are the same, and the same is true for Jest. 
import { validateStringNotEmpty, validateNumber } from './validation'

describe('validateStringNotEmpty()', () => {
  it('should throw an error if an empty string is provided', () => {
    const input = '';
    const result = () => validateStringNotEmpty(input);
    expect(result).toThrow();
  });
  
  it('should throw an error with a message says "must not be empty"', () => {
    const input = '';
    const result = () => validateStringNotEmpty(input);
    expect(result).toThrow(/must not be empty/);
  });
  
  it('should throw an error if a long string of blanks is provided', () => {
    const input = '     ';
    const result = () => validateStringNotEmpty(input);
    expect(result).toThrow();
  });
  
  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};
  
    const validationNum = () => validateStringNotEmpty(inputNum);
    const validationBool = () => validateStringNotEmpty(inputBool);
    const validationObj = () => validateStringNotEmpty(inputObj);
  
    expect(validationNum).toThrow();
    expect(validationBool).toThrow();
    expect(validationObj).toThrow();
  });
  
  it('should not throw an error if a non-empty string is provided', () => {
    const input = 'valid';
    const result = () => validateStringNotEmpty(input);
    expect(result).not.toThrow();
  });
}); 

describe('validateNumber()', () => {
      it('should throw an error if NaN is provided', () => {
        const input = NaN;
        const result = () => validateNumber(input);
        expect(result).toThrow();
      });
      
      it('should throw an error with a message says "invalid number"', () => {
        const input = NaN;
        const result = () => validateNumber(input);
        expect(result).toThrow(/Invalid number/);
      });
      
      it('should throw an error if a non-numeric type value is provided', () => {
        const input = '1'; // It is a string type
        const result = () => validateNumber(input);
        expect(result).toThrow();
      });
      
      it('should not throw an error if a number is provided', () => {
        const input = 1;
        const result = () => validateNumber(input);
        expect(result).not.toThrow();
      });
});
  
  
/* Other tests:  
it('should throw an error if the string value is empty', () => {
    expect(() => validateStringNotEmpty()).toThrowError() 
});

it('should throw an error if a NaN value is passed into the validateNumber function', () => {
    expect(() => validateNumber()).toThrowError() 
    expect(() => validateNumber('invalid')).toThrowError()
});
*/ 
