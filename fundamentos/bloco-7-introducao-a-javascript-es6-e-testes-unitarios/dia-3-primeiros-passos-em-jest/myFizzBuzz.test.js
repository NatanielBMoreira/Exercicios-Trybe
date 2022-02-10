const myFizzBuzz = require('./myFizzBuzz');

test('return fizzbuzz if the parameter is divisible by 3 and 5.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});
test('return fizz if the parameter is divisible by 3.', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
});
test('return fizz if the parameter is divisible by 5.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});
test('returns the parameter itself if the parameter is not divisible by 3 or 5.', () => {
    expect(myFizzBuzz(4)).toBe(4);
});
test('returns false if the parameter is not a number', () => {
    expect(myFizzBuzz('4')).toBe(false);
});