// 11. Faça o teste de uma função que compara dois números e retorna true 
// se o primeiro for maior que o segundo e false caso contrário

// isAbove.test.js
const isAbove = require('./isAbove');

describe('isAbove', () => {
  test('7 is above 5', () => {
    expect(isAbove(7, 5)).toBeTruthy();
  });

  test('7 is nor above 7', () => {
    expect(isAbove(7, 7)).toBeFalsy();
  });

  test('7 is not above 8', () => {
    expect(isAbove(7, 8)).toBeFalsy();
  });
});
