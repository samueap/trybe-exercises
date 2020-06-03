// 3.A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

// mySum.test.js
const mySum = require('./mySum');

describe('mySum', () => {
  test('the sum of the array [1, 2, 3, 4] is 10', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });

  test('the sum of the array [1, -2, -3, 4] is 0', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  })
});
