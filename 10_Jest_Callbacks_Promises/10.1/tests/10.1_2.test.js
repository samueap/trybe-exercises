// 2. A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

// myIndexOf.test.js
const myIndexOf = require('./myIndexOf');

describe('myIndefOf', () => {
  const a = [1, 2, 3, 4];

  test('returns the item index when the array contains the item', () => {
    expect(myIndexOf(a, 3)).toBe(2);
  });

  test('return -1 if the array does not contain the item', () => {
    expect(myIndexOf(a, 5)).toBe(-1);
  });
});
