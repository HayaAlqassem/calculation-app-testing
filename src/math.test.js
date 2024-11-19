/*
Naming the file .spec or .test both works. 
Once you execute Vitest (Vitest is our test runner), 
Vitest will automatically see that this is a testing file that contains tests, 
and it will execute any test you write in that file. The same is true for Jest. 
You can choose math.spec.js or math.test.js. 
*/

/*
Vitest supports writing and running your tests within your source code 
alongside the implementation, aka, In-Source Testing. 
Jest doesn’t support this feature. 
*/

/* To add a test, you use a specific keyword "test" or "it". 
"test" or "it" are functions, and you should import them from Vitest.
If you use Jest, you can also use the keyword "test" or "it" without importing them.
*/ 
import { it, expect } from 'vitest'; // You can import "test" or "it", they are the same, and the same is true for Jest. 
import { add } from './math'
/* it('_',); As a first argument, you provide a string and in that string, 
you define what your test will test and what your expectation is. */ 
/* it('',_); As a second argument, you pass a pointer to another function, 
or you just create an anonymous funtion and in the body of this fuction 
you will write your actual testing code.*/ 
it('should add up all number values in an array', () => {
    // the Arrange phase: 
    const numbers = [1, 2];
    
    // the Act phase: 
    const result = add(numbers);

    /* We want to define our expectation and what we would consider a success.
    For this we use the function by Vitest, the "expect" function.
    For Jest we can also use the same fuction "expect".*/
    // the Assert phase: 
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0
    );
    expect(result).toBe(expectedResult); // We pass the result we derived in our test. 
});

it('should yield NaN if at least one invalid number is provided', () => {
    // the Arrange phase: 
    const inputs = ['invalid', 1];

    // the Act phase:
    const result = add(inputs); // Our expectation here is that the result is NaN ('invalid' string)

    // the Assert phase:
    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2']; // An array of numeric string values.

    const result = add(numbers);

    const expectedResult = numbers.reduce(
        /* Adding a plus in "+prevValue" and "+curValue" to force a conversion to a real number.
        So the expectedResult is a real number.*/
        (prevValue, curValue) => +prevValue + +curValue,
        0
    );
    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the add function', () => {
    // We do not have an Arrange phase because we do not want to pass anything into the function.

    // the Act phase:
    // "result" is storing an error function (() => {})
    const result = () => {
        add();
    };

    // the Assert phase:
    expect(result).toThrow(/is not iterable/); // Making sure we expect the right kind of error(/is not iterable/)
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    // the Arrange phase: 
    const num1 = 1;
    const num2 = 2;

    // the Act phase:
   // "result" is storing an error function (() => {})
    const result = () => {
        add(num1, num2);
    };

    // the Assert phase: 
    expect(result).toThrow(/is not iterable/); // Making sure we expect the right kind of error(/is not iterable/)
});

