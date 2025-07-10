import { Sum } from "../components/Sum"

test('sum function should take two numbers and return me the addition of numbers', () => { 
    const result = Sum(7,8);

    //Assertion
    expect(result).toBe(15);
 })