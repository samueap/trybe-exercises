// 7. Teste se uma variável foi definida

const thereIs = require('./thereIs');

describe('thereIs', () => {
  test('type of a defined variable is not `undefined`', () => {
    expect(typeof (thereIs)).not.toBe('undefined');
  });

  test('type of a variable not defined is undefined', () => {
    expect(typeof (thereIsnt)).toBe('undefined');
  });
});