const stringLength = require('./modules/stringLength');

test('Function created should return the correct length of the string', () => {
  expect(stringLength('dance')).toBe(5);
});

test('Function should throw an error if the string length is less than 1', () => {
  expect(() => stringLength('')).toThrow(
    'Sorry string must have at least one character'
  );
});
