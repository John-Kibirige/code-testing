const stringLength = require('./modules/stringLength');
const reverseString = require('./modules/reverseString');

// unit tests for string length method
test('Function created should return the correct length of the string', () => {
  expect(stringLength('dance')).toBe(5);
});

test('Function should throw an error if the string length is less than 1', () => {
  expect(() => stringLength('')).toThrow(
    'Sorry string must have at least one character'
  );
});

// unit test for reverse string method
test('Function should reverse a string ', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('function should return an empty string is passed to it', () => {
  expect(reverseString('')).toBe('');
});
