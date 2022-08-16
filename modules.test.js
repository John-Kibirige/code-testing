const stringLength = require('./modules/stringLength');
const reverseString = require('./modules/reverseString');
const Calculator = require('./modules/calculator');

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

// Calculator tests
const calculator = new Calculator();

// addition
describe('Add method ', () => {
  test('when two numbers are added they must give the correct answer', () => {
    expect(calculator.add(2, 6)).toEqual(8);
  });

  test('Method works well for decimal points ', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Method works well with negative values ', () => {
    expect(calculator.add(-2, 2)).toBe(0);
  });
});

// subtraction
describe('Subtraction method ', () => {
  test('subtracting two real values ', () => {
    expect(calculator.subtract(2, 6)).toEqual(-4);
  });

  test('Method works well for decimal points ', () => {
    expect(calculator.subtract(0.1, 0.2)).not.toBeCloseTo(0.1);
  });

  test('Method works well with negative values ', () => {
    expect(calculator.subtract(-2, 2)).not.toBe(0);
  });
});

// multiplication
describe('Multiplication ', () => {
  test('Multiply real values to get a correct answer ', () => {
    expect(calculator.multiply(2, 4)).toEqual(8);
  });

  test('Works well for decimal numbers ', () => {
    expect(calculator.multiply(0.02, 0.05)).toBeCloseTo(0.001);
  });

  test('works if 0 is one of the values ', () => {
    expect(calculator.multiply(0, 2992323)).toBe(0);
  });
});

//   division
describe('Division', () => {
  test('division of two normal values gives the right answer ', () => {
    expect(calculator.divide(30, 15)).toBe(2);
  });
  test('division of negative value(s)', () => {
    expect(calculator.divide(2, -2)).toBe(-1);
  });
  test('having 0 as a denominator throws an error ', () => {
    expect(() => calculator.divide(34, 0)).toThrow(
      'Sorry the denominator cannot be zero'
    );
  });
});
