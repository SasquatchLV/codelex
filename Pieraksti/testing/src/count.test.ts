import count from './count';

test('if string with trailing comma is a different key', () => {
  const response = count('I am a string, and here is some more string text.');
  expect(response).toHaveProperty('string', 1);
});

test('if returned object is not empty', () => {
  const response = count('I am a string, and here is some more string text.');
  expect(response).not.toEqual({});
});

test(
  'if returned object matches input string words as keys and number of times',
  () => {
    const response = count('I am a string, and here is some more string text.');
    expect(response).toStrictEqual({
      a: 1,
      am: 1,
      and: 1,
      here: 1,
      i: 1,
      is: 1,
      more: 1,
      some: 1,
      string: 1,
      'string,': 1,
      'text.': 1,
    });
  },
);

test('if object keys length is 11', () => {
  const response = count('I am a string, and here is some more string text.');
  const total = Object.keys(response).length;
  expect(total).toEqual(11);
});
