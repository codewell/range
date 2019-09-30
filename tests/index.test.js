const range = require('../src');

test('range(0) => []', () => {
  expect(range(0)).toEqual([]);
});

test('range(1) => [0]', () => {
  expect(range(1)).toEqual([0]);
});

test('range(2) => [0, 1]', () => {
  expect(range(2)).toEqual([0, 1]);
});

test('range(4) => [0, 1, 2, 3]', () => {
  expect(range(4)).toEqual([0, 1, 2, 3]);
});

/**
 * Test big numbers
 */
const thousand = 1000;
test('range(1000).length => 1000', () => {
  expect(range(thousand).length).toEqual(thousand);
});

const million = 1000000;
test('range(1000000) => 1000000', () => {
  expect(range(million).length).toEqual(million);
});

/**
 * Errors
 */

test('range(undefined) => throw Error', () => {
  expect(() => {
    range(undefined);
  }).toThrow();
});

test('range(null) => throw Error', () => {
  expect(() => {
    range(null);
  }).toThrow();
});

test('range(NaN) => throw Error', () => {
  expect(() => {
    range(NaN);
  }).toThrow();
});

test('range("foo") => throw Error', () => {
  expect(() => {
    range("foo");
  }).toThrow();
});

test('range([]) => throw Error', () => {
  expect(() => {
    range([]);
  }).toThrow();
});

test('range({}) => throw Error', () => {
  expect(() => {
    range({});
  }).toThrow();
});