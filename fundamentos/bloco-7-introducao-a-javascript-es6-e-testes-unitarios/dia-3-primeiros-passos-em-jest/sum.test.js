const sum = require('./sum');

test('sum two numbers', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
});
test('throws error', () => {
    expect(() => {sum(4, '5')}).toThrow();
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
});