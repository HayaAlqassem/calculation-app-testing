import { describe, it, expect } from "vitest";
import { generateTextResult } from './output';

describe('generateTextResult()', () => {
    it('should return a string, no matter which value is passed in', () => {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false; 

        const result1 = generateTextResult(val1);
        const result2 = generateTextResult(val2);
        const result3 = generateTextResult(val3);

        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');
    });

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;
    
        const textResult = generateTextResult(result);
    
        expect(textResult).toContain(result.toString());
    });
    
    it('should return an empty string if "no-calc" is provided as a result', () => {
        const result = 'no-calc';
    
        const textResult = generateTextResult(result);
    
        expect(textResult).toBe('');
    });
    
    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
        const result = 'invalid';
    
        const textResult = generateTextResult(result);
    
        expect(textResult).toContain('Invalid');
    });

});

