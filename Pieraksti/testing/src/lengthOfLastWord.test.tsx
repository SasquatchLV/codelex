import lengthOfLastWord from './lengthOfLastWord';

test('if returns a 4, because John is 4 characters', () => {
  const response = lengthOfLastWord('My name is John');
  expect(response).toStrictEqual(4);
});

test('if cleans all the symbols and returns correct value', () => {
  const response = lengthOfLastWord('My! name#^ is@% Joh#!n');
  expect(response).toStrictEqual(4);
});

test(
  'if the function returns a number',
  () => {
    const response = lengthOfLastWord(
      'My name is John and return value is number',
    );
    expect(typeof response).toBe('number');
  },
);

test('if a bit longer string is passed ', () => {
  const response = lengthOfLastWord('This^ is some! random string');
  expect(response).toBe(6);
});

test('if returned value is not an object', () => {
  const response = lengthOfLastWord('My name is John');
  expect(response).not.toBeInstanceOf(Object);
});
