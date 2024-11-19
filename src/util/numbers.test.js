import { describe, it, expect } from 'vitest'; // You can import "test" or "it", they are the same, and the same is true for Jest. 
import { transformToNumber, cleanNumbers } from './numbers'

describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        const input = '1'; 
    
        const result = transformToNumber(input);
    
        expect(result).toBeTypeOf('number');    
    });
    
    it('should transform a string number to a number of type number', () => {
        const input = '1'; 
    
        const result = transformToNumber(input);
    
        expect(result).toBe(+input);    
    });
    
    it('should yield NaN for non-transformable values', () => {
        // Here we are testing one and the same thing but with different values.
    
        // the Arrange phase: 
        const input = 'invalid';
        const input2 = {}; // {} is an empty object. An empty object has no properties assigned to it.
    
        // the Act phase:
        const result = transformToNumber(input); // Our expectation here is that the result is NaN ('invalid' string)
        const result2 = transformToNumber(input2);
        
        // the Assert phase:
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    /* Here we have integration tests. */ 

    it('should return an array of number values if an array of string number values is provided', () => {
        const nubmerValues = ['1', '2'];

        const cleanedNumbers = cleanNumbers(nubmerValues);

        /* toBe() vs toEqual() 
        Using [expect(cleanedNumbers).toBe([1, 2]);] will fail 
        because two arrays, even if they look similar, are not the exact same object 
        because arrays are just objects and they occupy different places in memory. 
        Instead of using toBe(), we can use toEqual() which checks the values inside of the array. */
        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const nubmerValues = ['', 1];

        const cleanFunction = () => cleanNumbers(nubmerValues);

        expect(cleanFunction).toThrow();
    });
});


