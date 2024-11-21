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
        const input1 = 'invalid';
        const input2 = {}; 
    
        const result1 = transformToNumber(input1); 
        const result2 = transformToNumber(input2);
        
        expect(result1).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const nubmerValues = ['1', '2'];

        const cleanedNumbers = cleanNumbers(nubmerValues);

        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const nubmerValues = ['', 1];

        const cleanFunction = () => cleanNumbers(nubmerValues);

        expect(cleanFunction).toThrow();
    });
});


