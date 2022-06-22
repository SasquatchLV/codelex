import runningSum from './runningSum';

test('if output is correct when inputting 10 numbers', () => {
  const response = runningSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(response).toStrictEqual([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
});

test('if output is correct when passing negative numbers', () => {
  const response = runningSum([1, -2, 3, 4, -5, 6, 7, -8, 9, 10]);
  expect(response).toStrictEqual([
    1, -1, 2, 6, 1,
    7, 14, 6, 15, 25,
  ]);
});

test(
  'if the function returns an array',
  () => {
    const response = runningSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(response).toBeInstanceOf(Array);
  },
);

test('if the function returns an array of the same length as the input array', () => {
  const response = runningSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(response.length).toBe(10);
});

test('if floating numbers are passed in to the array ', () => {
  const response = runningSum(
    [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10],
  );
  expect(response).toStrictEqual([
    1.1,
    3.3,
    6.599999999999999,
    11,
    16.5,
    23.1,
    30.8,
    39.60000000000001,
    49.5,
    59.6,
  ]);
});
